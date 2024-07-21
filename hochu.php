<?php
error_reporting(E_ERROR | E_PARSE);
if (isset($_GET['url'])) {
    $headers = [
        'Connection: keep-alive',
        'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0',
        'Accept: */*',
        'Origin: http://cdnneedtv.ru',
        'Referer: http://cdnneedtv.ru/',
        'Accept-Encoding: gzip, deflate',
        'Accept-Language: es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    ];
    echo curl_get(rtrim($_GET['url']), $headers);
    exit;
} else if (isset($_GET['id'])) {
	$headers = [
		"Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
		"Accept-Language: es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
		"Cache-Control: no-cache",
		"Connection: keep-alive",
		"Pragma: no-cache",
		"Referer: http://hochu.tv/",
		"Upgrade-Insecure-Requests: 1",
		"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0",
	];
	
	$ch_id = $_GET['id'];
	$channel_url = "http://hochu.tv/".$ch_id.".html";
	$response = curl_get($channel_url, headers);
	preg_match('/<iframe width=.*src="(.*)" .*>/i', $response, $matches);
	$url=$matches[1];
	$response = curl_get($url, $headers);
	$server = get_server_url();
	$pattern = '/file:"([^"]+)"}/i';
	preg_match($pattern, $response, $matches);
	if (isset($matches[1])) {
		$curl = curl_init($matches[1]);
		curl_setopt($curl, CURLOPT_URL, $matches[1]);
		curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
		curl_setopt($curl, CURLOPT_TIMEOUT, 30);
		curl_setopt($curl, CURLOPT_ENCODING, '');
		curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); // Solo para depuración, ten cuidado
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // Solo para depuración, ten cuidado

		$response = curl_exec($curl);
		$play_url = str_replace("index.m3u8", "", curl_getinfo($curl)["url"]);
		curl_close($curl);
		$lineas_ts = explode("\n", $response);
		for ($i = 0; $i < count($lineas_ts) - 1; $i++) {
			if (strpos($lineas_ts[$i], '#') !== false) {
				echo $lineas_ts[$i].PHP_EOL;
			} else {
				echo $server.'?url='.$play_url.trim($matches[2]).$lineas_ts[$i].PHP_EOL;
			}
		}
	} else {
		echo "No se encontró la URL en el contenido.";
	}
}else{
	$headers = ["User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0"];
	$response = curl_get("http://hochu.tv/", headers);
	$pattern = '/<td.*<a.*href="(.*)"><img/i';
	preg_match_all($pattern, $response, $matches_href);
	$pattern = '/<td.*<a.*href=.*<img.*src="(.*)" style=".*>/i';
	preg_match_all($pattern, $response, $matches_images);
	$result="#EXTM3U".PHP_EOL;
	$server = get_server_url();
	$count=0;
	foreach ($matches_href[1] as $value) {
		$image_path=$matches_images[1][$count];
		$name=str_replace(".html","",$value);
		$name=str_replace("/","",$name);
		$result.='#EXTINF:-1 tvg-name="'.$name.'" tvg-logo="'.$server.'?url='."http://hochu.tv".$image_path.'",'.$name.PHP_EOL;
		$result.= $server.'?id='.$name.PHP_EOL;
		$count+=1;
	}
	header("Content-Type:vnd.apple.mpegURL");
	header("Content-Disposition:attachment;filename=index.m3u8");
	echo $result;
}

function get_server_url(){
	$headers = getallheaders();
	$schema = $headers["X-Forwarded-Proto"];
	if (!$schema){
		$schema = isset($_SERVER['HTTPS']) ? 'https' : 'http';
	}
	$host = $headers["X-Forwarded-Server-Name"];
	if (!$host){
		$host = $_SERVER['HTTP_HOST'];
	}else{
		$host .= ":" . $headers["X-Forwarded-Port"];
	}
	return $schema . "://" . $host . $_SERVER['SCRIPT_NAME'];

}

function curl_get($url, $headers) {
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_TIMEOUT, 30);
    curl_setopt($curl, CURLOPT_ENCODING, '');
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); // Solo para depuración, ten cuidado
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // Solo para depuración, ten cuidado

    $resp = curl_exec($curl);
    curl_close($curl);
    return $resp;
}
?>
