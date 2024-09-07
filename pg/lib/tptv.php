<?php

function generateRandomPhoneNumber() {
    return '151' . mt_rand(10000000, 99999999);
}

function generateRandomMACAddress() {
    $mac = [];
    for ($i = 0; $i < 6; $i++) {
        $mac[] = sprintf('%02X', mt_rand(0, 255));
    }
    return implode(':', $mac);
}

function getAuthCode($contentId) {
    $userId = generateRandomPhoneNumber();
    $macAddress = generateRandomMACAddress();
    $ottUserToken = $userId . '-' . $macAddress;

    $data = [
        "SPAuthResult" => "0",
        "UserID" => $userId,
        "OTTUserToken" => $ottUserToken,
        "ContentID" => $contentId,
        "MAC" => $macAddress
    ];

    $json_data = json_encode($data);

    $url = "http://jscmcc-live.playauth.gitv.tv/itv/ottauth/MjIzLjEwNS4yNTEuNTc6MzMyMDAvRVBH/" . $macAddress;

    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'User-Agent: okhttp/3.8.1',
        'Host: jscmcc-live.playauth.gitv.tv',
        'Content-Length: ' . strlen($json_data),
    ]);

    $result = curl_exec($ch);
    curl_close($ch);

    if ($result === false) {
        return null;
    }

    $response = json_decode($result, true);

    return $response['AuthCode'] ?? null;
}

function getRedirectedUrl($url) {
    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_NOBODY, true); // Do not download content
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false); // Do not automatically follow redirects
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, true); // Include header in output
    curl_setopt($ch, CURLOPT_TIMEOUT, 5); // Set a short timeout
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'User-Agent: okhttp/3.8.1',
        'Host: 183.207.249.71',
    ]);

    // Execute the request and get headers
    $headers = curl_exec($ch);

    // Get information about the request
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $redirectedUrl = null;

    // Check if the response indicates a redirect
    if ($httpCode >= 300 && $httpCode < 400) {
        // Extract the Location header
        preg_match('/Location:\s*(.*)/i', $headers, $matches);
        if (isset($matches[1])) {
            $redirectedUrl = trim($matches[1]);
        }
    }

    curl_close($ch);

    return $redirectedUrl;
}

function transformUrl($url) {
    // Replace 'index.m3u8' with '1.m3u8'
    $url = str_replace('index.m3u8', '1.m3u8', $url);
    
    // Replace the protocol with the new prefix
    $url = preg_replace('/^https?:\/\//', 'http://tptv.mobaibox.com/hwcdnbacksourceflag_', $url);

    return $url;
}

$contentId = $_GET['ContentID'] ?? 'G_CCTV-5-AVS-4K264'; // 默认值是 G_CCTV-1-AVS-4K264
$authCode = getAuthCode($contentId);

if ($authCode) {
    $newLink = "http://183.207.249.71/gitv/live1/$contentId/$contentId?$authCode";
    $redirectedUrl = getRedirectedUrl($newLink);
    
    if ($redirectedUrl && $redirectedUrl !== $newLink) {
        $finalUrl = transformUrl($redirectedUrl);
        header('Location:'.$finalUrl);
    } else {
        echo "No redirection detected or redirected to the same URL.";
    }
} else {
    echo "Failed to obtain AuthCode.";
}

?>
