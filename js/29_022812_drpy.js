<!DOCTYPE html>
<html lang="zh-CN" class="theme-gitea">
<head data-suburl="">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>guot54/ygbh - JS/29_022812_drpy.js at master - Agit</title>
	<meta name="theme-color" content="#6cc644">
	<meta name="author" content="guot54" />
	<meta name="description" content="ygbh" />
	<meta name="keywords" content="go,git,self-hosted,gitea">
	<meta name="referrer" content="no-referrer" />
	<meta name="_csrf" content="-_9D8MG3pwscN4vzfUyrp2-pZpw6MTY5MzU3MTE2MzQ1NzgwNDcyOA" />
	<meta name="_suburl" content="" />
	
		<meta name="_uid" content="1376" />
	
	
	

	<script>
		window.config = {
			AppVer: 'gitea模板还原\u002b138-g943c8c71f',
			AppSubUrl: '',
			StaticUrlPrefix: '',
			UseServiceWorker:  true ,
			csrf: '-_9D8MG3pwscN4vzfUyrp2-pZpw6MTY5MzU3MTE2MzQ1NzgwNDcyOA',
			HighlightJS: false,
			SimpleMDE: false,
			Tribute: false,
			U2F: false,
			Heatmap: false,
			heatmapUser: null,
			NotificationSettings: {
				MinTimeout:  10000 ,
				TimeoutStep:   10000 ,
				MaxTimeout:  60000 ,
				EventSourceUpdateTime:  10000 ,
			},
			PageIsProjects: false,
      
		};
	</script>
	<link rel="icon" href="/img/favicon.svg" type="image/svg+xml">
	<link rel="alternate icon" href="/img/favicon.png" type="image/png">
	<link rel="mask-icon" href="/img/agit-safari.svg" color="#609926">
	<link rel="fluid-icon" href="/img/agit-lg.png" title="Agit">


	<link rel="stylesheet" href="/css/index.css?v=220846678a86246c9d7e7c46c21f20c2">
	<noscript>
		<style>
      .dropdown:hover > .menu { display: block; }
      .ui.secondary.menu .dropdown.item > .menu { margin-top: 0; }
		</style>
	</noscript>
	<style class="list-search-style"></style>

	
		<meta property="og:title" content="ygbh" />
		<meta property="og:url" content="https://agit.ai/guot54/ygbh" />
		
	
	<meta property="og:type" content="object" />
	
		<meta property="og:image" content="https://agit.ai/user/avatar/guot54/-1" />
	

<meta property="og:site_name" content="Agit" />

	


<link rel="stylesheet" href="/vendor/plugins/xterm/xterm.css?v=220846678a86246c9d7e7c46c21f20c2" />


</head>
<body>
	

	<div class="full height">
		<noscript>使用 JavaScript能使本网站更好的工作。</noscript>

		

		
			
			<div class="ui top secondary stackable main menu following bar light" style="background: #242628; height: 52px;">
				
<div class="ui container z-max" id="navbar" v-cloak style="position:fixed;">
	<div class="i-flex i-align-center i-justify-between logo-img" style="margin-right:26px;height:52px;">
		<a href="/">
			<img class="share-nav-logo" src="/img/logo/nav-logo.svg">
		</a>
		<div class="ui basic icon button mobile-only" id="navbar-expand-toggle">
			<i class="sidebar icon"></i>
		</div>
	</div>

	
		<a class="item " href="/">首页</a>
		
		<a class="item " href="/issues">讨论区</a>
		
		
		<a class="item " href="/pulls">合并请求</a>
		
		<a class="mobile-only item " href="/explore/repos">探索</a>
		<div class="ui input d-relative navbar-search not-mobile" :class="{active:menuVisible}">
			<i class="icon iconfont icon-search"></i>
			<input v-model="searchName" placeholder="搜索" type="text" autocomplete="off"  @focus="menuVisible = true">
			<div v-show="searchName.trim() && menuVisible" class="ui segment transition z-menu" @focus="menuVisible = true">
				<div class="ui list" @click="handleSearch('repos')">
					<span class="mr-md">${searchName}</span> <span class="i-text-right">仓库</span>
				</div>
				<div class="ui list" @click="handleSearch('users')">
					<span class="mr-md">${searchName}</span> <span class="i-text-right">用户</span>
				</div>
				<div class="ui list" @click="handleSearch('organizations')">
					<span class="mr-md">${searchName}</span> <span class="i-text-right">组织</span>
				</div>
			</div>

		</div>

	
	

	


	

	<div class="right stackable menu header-right">
		
		<div class="ui dropdown jump item poping up active visible">
			<i class="iconfont mr-3xs font-size-2xl" :class='{"icon-lang-zh2en":lan!=="en-US","icon-lang-en2zh":lan==="en-US"}'></i>
			<span id="footerLang" class="hidden">简体中文</span>
			<i class="caret down icon font-size-sm"></i>
			<div class="menu">
				
				<span lang="zh-CN" class="item active selected" onclick="handleLanguage(&#34;zh-CN&#34;)">简体中文</span>
				
				<span lang="en-US" class="item " onclick="handleLanguage(&#34;en-US&#34;)">English</span>
				
			</div>
		</div>

		<a href="/notifications" class="item poping up" data-content='通知' data-variation="tiny inverted">
				<span class="text d-relative">
					<i class="iconfont icon-bell mr-none font-size-lg"></i>
					<span class="sr-mobile-only">通知</span>
					
					
				</span>
		</a>

		<div class="ui dropdown jump item poping up" data-content="创建…" data-variation="tiny inverted">
		<span class="text">
					<i class="iconfont icon-plus mr-3xs"></i>
					<span class="sr-mobile-only">创建…</span>
					<i class="caret down icon font-size-sm not-mobile"></i>
				</span>
		<div class="menu left">
			<a class="item" href="/repo/create">
				<i class="iconfont icon-create-repo"></i> 创建仓库
			</a>
			<a class="item" href="/repo/migrate">
				<i class="iconfont icon-migrate-repo"></i> 迁移外部仓库
			</a>
			
			<a class="item" href="/org/create">
				<i class="iconfont icon-org-member"></i> 创建组织
			</a>
			
		</div>
	</div>

	<div class="ui dropdown jump item poping up" data-position="bottom right" tabindex="-1" data-content="个人中心" data-variation="tiny inverted">
	<span class="text">
					<img class="ui tiny avatar image mr-3xs" src="/user/avatar/guot54/-1">
					<span class="sr-only">个人中心</span>
					<span class="mobile-only">guot54</span>
					<i class="caret down icon font-size-sm not-mobile" tabindex="-1"></i>
				</span>
	<div class="menu user-menu" tabindex="-1">
		<div class="ui header">
			已登录用户 <strong>guot54</strong>
		</div>

		<div class="divider"></div>

		<a class="item" href="/guot54">
			<i class="iconfont icon-user"></i>
			个人主页
		</a>

		<a class="item" href="/user/settings/profile">
			<i class="iconfont icon-gear"></i>
			账号管理
		</a>

		

		<a class="item" href="/user/settings/computing">
			<i class="iconfont icon-pkg-manage"></i>
			资源管理
		</a>

		<div class="divider"></div>
		<a  class="item link-action logout" href data-url="/user/logout" data-redirect="/" onclick="logoutMethod()">
			<i class="iconfont icon-quit"></i>
			退出
		</a>
	</div>
</div>
</div>


</div>

			</div>
		


<div id="repoHome" class="repository file list ">
	<div class="header-wrapper">

	<div class="ui container">
		<div class="repo-header">
			<div class="ui huge breadcrumb repo-title">
				
					<div class="repo-header-icon">
	
		
			<svg viewBox="0 0 16 16" class="svg octicon-repo" width="32" height="32" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>
			
		
	
</div>

				
				<a href="/guot54">guot54</a>
				<div class="divider"> / </div>
				<a href="/guot54/ygbh">ygbh</a>

				<i class="iconfont icon-ai"></i>

				
					
						
					
				
				
				
				
				
			</div>
			
				<div class="repo-buttons">
					<form method="post" action="/guot54/ygbh/action/unwatch?redirect_to=%2fguot54%2fygbh%2fsrc%2fbranch%2fmaster%2fJS%2f29_022812_drpy.js">
						<input type="hidden" name="_csrf" value="-_9D8MG3pwscN4vzfUyrp2-pZpw6MTY5MzU3MTE2MzQ1NzgwNDcyOA">
						<div class="ui labeled button" tabindex="0">
							<button type="submit" class="ui compact basic button">
								<i class="iconfont mr-2xs icon-eye-slash"></i>取消关注
							</button>
							<a class="ui basic label" href="/guot54/ygbh/watchers">
								27
							</a>
						</div>
					</form>
					<form method="post" action="/guot54/ygbh/action/star?redirect_to=%2fguot54%2fygbh%2fsrc%2fbranch%2fmaster%2fJS%2f29_022812_drpy.js">
						<input type="hidden" name="_csrf" value="-_9D8MG3pwscN4vzfUyrp2-pZpw6MTY5MzU3MTE2MzQ1NzgwNDcyOA">
						<div class="ui labeled button" tabindex="0">
							<button type="submit" class="ui compact basic button">
								<i class="mr-2xs iconfont icon-star"></i>点赞
							</button>
							<a class="ui basic label" href="/guot54/ygbh/stars">
								13
							</a>
						</div>
					</form>
					
						<div class="ui labeled button " tabindex="0">
							<a class="ui compact basic button
								"
								
									href="/repo/fork/3184"
								 data-position="top center" data-variation="tiny">
								<i class="mr-2xs iconfont icon-fork"></i>派生
							</a>
							<a class="ui basic label" href="/guot54/ygbh/forks">
								59
							</a>
						</div>
					
				</div>
			
		</div>
	</div>

	<div class="ui tabs container">
		
			<div class="ui tabular stackable menu navbar">
				
				<a class="active item" href="/guot54/ygbh">
					<i class="iconfont icon-code"></i> 代码
				</a>
				

				
					<a class=" item" href="/guot54/ygbh/issues">
						<i class="iconfont icon-open"></i> 讨论 <span class="ui gray tiny label circular">0</span>
					</a>
				

				

				
					<a class=" item" href="/guot54/ygbh/pulls">
						<i class="iconfont icon-merge-request"></i> 合并请求 <span class="ui gray tiny label circular">0</span>
					</a>
				

				
					<a class=" item" href="/guot54/ygbh/wiki" >
						<i class="iconfont icon-wiki"></i> 百科
					</a>
				

				
					<a class=" item" href="/guot54/ygbh/activity">
						<i class="iconfont icon-activity"></i> 动态
					</a>
				

				
	<a class=" item" href="/guot54/ygbh/training">
		<i class="iconfont icon-training"></i> 训练
	</a>
	<a class=" item" href="/guot54/ygbh/storage">
		<i class="iconfont icon-save"></i> 存储
	</a>



				
					<div class="right menu">
						<a class=" item" href="/guot54/ygbh/settings">
							<i class="iconfont icon-gear"></i> 仓库设置
						</a>
					</div>
				
			</div>
		
	</div>
	<div class="ui tabs divider"></div>
</div>

	<span class="repo-url hidden">/guot54/ygbh</span>
	<span class="repo-id hidden">3184</span>
	<div class="ui container">
		



		<div class="ui repo-description">
			<div id="repo-desc">
				
					<span class="no-description text-italic">暂无描述</span>
				<a class="link" href=""></a>
			</div>
			
		</div>
		<div class="ui" id="repo-topics">
		
		
		</div>
		
		<div class="ui repo-topic-edit grid form segment error" id="topic_edit" style="display:none">
			<div class="fourteen wide column">
				<div class="field">
					<div class="ui fluid multiple search selection dropdown">
						<input type="hidden" name="topics" value="">
						
						<div class="text"></div>
					</div>
				</div>
			</div>
			<div class="two wide column">
				<a class="ui button primary" href="javascript:;" id="save_topic"
				data-link="/guot54/ygbh/topics">保存</a>
			</div>
		</div>
		
		<div class="hide" id="validate_prompt">
			<span id="count_prompt">您最多选择25个主题</span>
			<span id="format_prompt">主题必须以字母或数字开头，可以包含连字符 (-)，并且长度不得超过35个字符</span>
		</div>
		
		
		
			<div class="shareicon i-flex">
					<span onclick="handleShare()" class="cur-pointer ml-auto mr-sm">
						<i class="iconfont icon-share font-size-xs"></i>
						匿名共享
					</span>
			</div>
		

		<div class="ui segments repository-summary shadow-0 is-lang-stats">
	<div class="ui segment sub-menu repository-menu">
		<div class="ui two horizontal center link list">
			
				<div class="item">
					<a class="ui" href="/guot54/ygbh/commits/branch/master"><i class="iconfont icon-commit"></i> <b>1155</b> 提交</a>
				</div>
			
			
				<div class="item">
					<a class="ui" href="/guot54/ygbh/branches/"><i class="iconfont icon-branch-down"></i> <b>1</b> 分支</a>
				</div>
				<div class="item">
					<span class="ui"><i class="iconfont icon-memory"></i> <b id="RepoSize">256 MB</b></span>
				</div>
			
		</div>
	</div>
	
	<div class="ui segment sub-menu language-stats-details" style="display: none">
		<div class="ui horizontal center link list">
			
			<div class="item">
				<span class="ui">
				<i class="color-icon" style="background-color: #f1e05a"></i>
				<b>
					JavaScript
				
				</b> 65.1%</span>
			</div>
			
			<div class="item">
				<span class="ui">
				<i class="color-icon" style="background-color: #3572A5"></i>
				<b>
					Python
				
				</b> 34.9%</span>
			</div>
			
		</div>
	</div>
	<a class="ui segment language-stats">
		
		<div class="bar" style="width: 65.1%; background-color: #f1e05a">&nbsp;</div>
		
		<div class="bar" style="width: 34.9%; background-color: #3572A5">&nbsp;</div>
		
	</a>
	
</div>

		<div class="ui stackable secondary menu mobile--margin-between-items mobile--no-negative-margins">
			<div class="fitted item choose reference">
	<div class="ui floating filter dropdown custom" data-can-create-branch="true" data-no-results="未找到结果">
		<div id="branchSelect" class="ui basic small compact button" data-mode="branches" @click="menuVisible = !menuVisible" @keyup.enter="menuVisible = !menuVisible">
			<span class="text">
				<i class="iconfont icon-branch-down"></i>
				分支:
				<strong>master</strong>
			</span>
			<i class="dropdown icon"></i>
		</div>
		<div class="data" style="display: none" data-mode="branches">
			
				<div class="item branch selected" data-url="/guot54/ygbh/src/branch/master/JS/29_022812_drpy.js">master</div>
			
			
		</div>
		<div class="menu transition" :class="{visible: menuVisible}" v-if="menuVisible" v-cloak>
			<div class="ui icon search input">
				<i class="filter icon"></i>
				<input name="search" ref="searchField" v-model="searchTerm" @keydown="keydown($event)" placeholder="过滤分支或标签...">
			</div>
			<div class="header branch-tag-choice">
				<div class="ui grid">
					<div class="two column row">
						<a class="reference column" href="#" @click="mode = 'branches'; focusSearchField()">
							<span class="text" :class="{black: mode !== 'branches'}">
								<i class="iconfont icon-branch-down"></i> 分支列表
							</span>
						</a>
						<a class="reference column" href="#" @click="mode = 'tags'; focusSearchField()">
							<span class="text" :class="{black: mode !== 'tags'}">
								<i class="reference tags icon"></i> 标签列表
							</span>
						</a>
					</div>
				</div>
			</div>
			<div class="scrolling menu" ref="scrollContainer">
				<div v-for="(item, index) in filteredItems" :key="item.name" class="item" :class="{selected: item.selected, active: active == index}" @click="selectItem(item)" :ref="'listItem' + index">${ item.name }</div>
				<div class="item" v-if="showCreateNewBranch" :class="{active: active == filteredItems.length}" :ref="'listItem' + filteredItems.length">
					<a href="#" @click="createNewBranch()">
						<div>
							<i class="iconfont icon-branch-down"></i>
							创建分支 <strong>${ searchTerm }</strong>
						</div>
						<div class="text small">
							
								从 &#39;master&#39;
							
						</div>
					</a>
					<form ref="newBranchForm" action="/guot54/ygbh/branches/_new/branch/master" method="post">
						<input type="hidden" name="_csrf" value="-_9D8MG3pwscN4vzfUyrp2-pZpw6MTY5MzU3MTE2MzQ1NzgwNDcyOA">
						<input type="hidden" name="new_branch_name" v-model="searchTerm">
					</form>
				</div>
			</div>
			<div class="message" v-if="showNoResults">${ noResults }</div>
		</div>
	</div>
</div>

			
			
			
			
				<div class="fitted item">
					<span class="ui breadcrumb repo-path">
						<a class="section" href="/guot54/ygbh/src/branch/master" title="ygbh">ygbh</a>
						
							<span class="divider">/</span>
							
								<span class="section">
									<a href="/guot54/ygbh/src/branch/master/JS" title="JS">JS</a></span>
						
							<span class="divider">/</span>
							
								<span class="active section" title="29_022812_drpy.js">29_022812_drpy.js</span>
							
						</span></div>
			
			<div class="right fitted item" id="file-buttons">
				<div>
					
						
						
					

					
					
				</div>
			</div>

			<div class="fitted item">
				
				
			</div>
		</div>
		
			<div class="tab-size-8 non-diff-file-content">
	<h4 class="file-header ui top attached header">
		<div class="file-header-left df ac">
			
				<div class="file-info text grey normal mono">
					
					
						<div class="file-info-entry">
							37 行
						</div>
					
					
						<div class="file-info-entry">
							13 KB
						</div>
					
					
				</div>
			
		</div>
		
		<div class="file-header-right df ac">
			<div class="ui right file-actions">
				<div class="ui buttons">
					<a class="ui button" href="/guot54/ygbh/raw/branch/master/JS/29_022812_drpy.js">原始文件</a>
					
						<a class="ui button" href="/guot54/ygbh/src/commit/b14520d15c406a5a0ecd95b4df091f4858ba83a3/JS/29_022812_drpy.js">永久链接</a>
					
					
						<a class="ui button" href="/guot54/ygbh/blame/branch/master/JS/29_022812_drpy.js">Blame</a>
					
					<a class="ui button" href="/guot54/ygbh/commits/branch/master/JS/29_022812_drpy.js">文件历史</a>
				</div>
				
					
						<a href="/guot54/ygbh/_edit/master/JS/29_022812_drpy.js"><span class="btn-octicon poping up"  data-content="编辑文件" data-position="bottom center" data-variation="tiny inverted"><svg viewBox="0 0 16 16" class="svg octicon-pencil" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"/></svg></span></a>
					
					
						<a href="/guot54/ygbh/_delete/master/JS/29_022812_drpy.js"><span class="btn-octicon btn-octicon-danger poping up"  data-content="删除文件" data-position="bottom center" data-variation="tiny inverted"><svg viewBox="0 0 16 16" class="svg octicon-trashcan" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"/></svg></span></a>
					
				
			</div>
		</div>
		
	</h4>
	<div class="ui attached table unstackable segment">
		<div class="file-view code-view">
			
				
				<table>
					<tbody>
						
						<tr>
							<td id="L1" class="lines-num">
								<span id="L1" data-line-number="1"></span>
							</td>
							<td rel="L1" class="lines-code chroma">
								<code><span class="kd">var</span> <span class="nx">rule</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L2" class="lines-num">
								<span id="L2" data-line-number="2"></span>
							</td>
							<td rel="L2" class="lines-code chroma">
								<code>    <span class="nx">title</span><span class="o">:</span><span class="s1">&#39;drpy&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L3" class="lines-num">
								<span id="L3" data-line-number="3"></span>
							</td>
							<td rel="L3" class="lines-code chroma">
								<code>    <span class="nx">host</span><span class="o">:</span><span class="s1">&#39;https://frodo.douban.com&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L4" class="lines-num">
								<span id="L4" data-line-number="4"></span>
							</td>
							<td rel="L4" class="lines-code chroma">
								<code>    <span class="nx">apidoc</span><span class="o">:</span><span class="s1">&#39;https://www.doubanapi.com&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L5" class="lines-num">
								<span id="L5" data-line-number="5"></span>
							</td>
							<td rel="L5" class="lines-code chroma">
								<code>    <span class="nx">homeUrl</span><span class="o">:</span><span class="s1">&#39;&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L6" class="lines-num">
								<span id="L6" data-line-number="6"></span>
							</td>
							<td rel="L6" class="lines-code chroma">
								<code>    <span class="nx">searchUrl</span><span class="o">:</span><span class="s1">&#39;&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L7" class="lines-num">
								<span id="L7" data-line-number="7"></span>
							</td>
							<td rel="L7" class="lines-code chroma">
								<code>    <span class="nx">searchable</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L8" class="lines-num">
								<span id="L8" data-line-number="8"></span>
							</td>
							<td rel="L8" class="lines-code chroma">
								<code>    <span class="nx">quickSearch</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L9" class="lines-num">
								<span id="L9" data-line-number="9"></span>
							</td>
							<td rel="L9" class="lines-code chroma">
								<code>    <span class="nx">filterable</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L10" class="lines-num">
								<span id="L10" data-line-number="10"></span>
							</td>
							<td rel="L10" class="lines-code chroma">
								<code>    <span class="c1">// 分类链接fypage参数支持1个()表达式</code>
							</td>
						</tr>
						
						<tr>
							<td id="L11" class="lines-num">
								<span id="L11" data-line-number="11"></span>
							</td>
							<td rel="L11" class="lines-code chroma">
								<code></span><span class="c1"></span>    <span class="nx">url</span><span class="o">:</span><span class="s1">&#39;/?pg=fypage&amp;class=fyclass&amp;douban=$douban&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L12" class="lines-num">
								<span id="L12" data-line-number="12"></span>
							</td>
							<td rel="L12" class="lines-code chroma">
								<code>    <span class="nx">filter_url</span><span class="o">:</span><span class="s1">&#39;fl={{fl}}&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L13" class="lines-num">
								<span id="L13" data-line-number="13"></span>
							</td>
							<td rel="L13" class="lines-code chroma">
								<code>    <span class="nx">图片来源</span><span class="o">:</span><span class="s1">&#39;@Referer=https://api.douban.com/@User-Agent=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/113.0.0.0%20Safari/537.36&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L14" class="lines-num">
								<span id="L14" data-line-number="14"></span>
							</td>
							<td rel="L14" class="lines-code chroma">
								<code>    <span class="nx">headers</span><span class="o">:</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L15" class="lines-num">
								<span id="L15" data-line-number="15"></span>
							</td>
							<td rel="L15" class="lines-code chroma">
								<code>            <span class="s2">&#34;Host&#34;</span><span class="o">:</span> <span class="s2">&#34;frodo.douban.com&#34;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L16" class="lines-num">
								<span id="L16" data-line-number="16"></span>
							</td>
							<td rel="L16" class="lines-code chroma">
								<code>            <span class="c1">// &#34;Host&#34;: &#34;api.douban.com&#34;,</code>
							</td>
						</tr>
						
						<tr>
							<td id="L17" class="lines-num">
								<span id="L17" data-line-number="17"></span>
							</td>
							<td rel="L17" class="lines-code chroma">
								<code></span><span class="c1"></span>            <span class="s2">&#34;Connection&#34;</span><span class="o">:</span> <span class="s2">&#34;Keep-Alive&#34;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L18" class="lines-num">
								<span id="L18" data-line-number="18"></span>
							</td>
							<td rel="L18" class="lines-code chroma">
								<code>            <span class="s2">&#34;Referer&#34;</span><span class="o">:</span> <span class="s2">&#34;https://servicewechat.com/wx2f9b06c1de1ccfca/84/page-frame.html&#34;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L19" class="lines-num">
								<span id="L19" data-line-number="19"></span>
							</td>
							<td rel="L19" class="lines-code chroma">
								<code>            <span class="c1">// &#34;content-type&#34;: &#34;application/json&#34;,</code>
							</td>
						</tr>
						
						<tr>
							<td id="L20" class="lines-num">
								<span id="L20" data-line-number="20"></span>
							</td>
							<td rel="L20" class="lines-code chroma">
								<code></span><span class="c1"></span>            <span class="s2">&#34;User-Agent&#34;</span><span class="o">:</span> <span class="s2">&#34;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat&#34;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L21" class="lines-num">
								<span id="L21" data-line-number="21"></span>
							</td>
							<td rel="L21" class="lines-code chroma">
								<code>    <span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L22" class="lines-num">
								<span id="L22" data-line-number="22"></span>
							</td>
							<td rel="L22" class="lines-code chroma">
								<code>    <span class="nx">timeout</span><span class="o">:</span><span class="mi">5000</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L23" class="lines-num">
								<span id="L23" data-line-number="23"></span>
							</td>
							<td rel="L23" class="lines-code chroma">
								<code>    <span class="nx">class_name</span><span class="o">:</span><span class="s1">&#39;热门电影&amp;热播剧集&amp;热播综艺&amp;电影筛选&amp;电视筛选&amp;电影榜单&amp;电视榜单&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L24" class="lines-num">
								<span id="L24" data-line-number="24"></span>
							</td>
							<td rel="L24" class="lines-code chroma">
								<code>    <span class="nx">class_url</span><span class="o">:</span><span class="s1">&#39;hot_gaia&amp;tv_hot&amp;show_hot&amp;movie&amp;tv&amp;rank_list_movie&amp;rank_list_tv&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L25" class="lines-num">
								<span id="L25" data-line-number="25"></span>
							</td>
							<td rel="L25" class="lines-code chroma">
								<code>    <span class="nx">filter</span><span class="o">:</span><span class="p">{</span><span class="s1">&#39;interests&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;status&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;状态&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;想看&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;mark&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;在看&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;doing&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;看过&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;done&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;subtype_tag&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;形式&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;电影&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;movie&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;电视&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;tv&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;year_tag&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;年代&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2010年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2010年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2000年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2000年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;90年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;90年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;80年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;80年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;70年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;70年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;60年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;60年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;更早&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;更早&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">]</span><span class="p">,</span> <span class="s1">&#39;hot_gaia&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;sort&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;排序&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;热度&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;recommend&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;最新&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;time&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;评分&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;rank&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;area&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;地区&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;华语&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;华语&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;欧美&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;欧美&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">]</span><span class="p">,</span> <span class="s1">&#39;tv_hot&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;type&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;分类&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;综合&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;tv_hot&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;国产剧&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;tv_domestic&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;欧美剧&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;tv_american&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;日剧&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;tv_japanese&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;韩剧&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;tv_korean&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;动画&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;tv_animation&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">]</span><span class="p">,</span> <span class="s1">&#39;show_hot&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;type&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;分类&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;综合&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;show_hot&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;国内&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;show_domestic&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;国外&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;show_foreign&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">]</span><span class="p">,</span> <span class="s1">&#39;movie&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;类型&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;类型&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部类型&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;喜剧&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;喜剧&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;爱情&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;爱情&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;动作&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;动作&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;科幻&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;科幻&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;动画&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;动画&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;悬疑&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;悬疑&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;犯罪&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;犯罪&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;惊悚&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;惊悚&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;冒险&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;冒险&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;音乐&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;音乐&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;历史&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;历史&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;奇幻&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;奇幻&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;恐怖&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;恐怖&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;战争&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;战争&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;传记&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;传记&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;歌舞&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;歌舞&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;武侠&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;武侠&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;情色&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;情色&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;灾难&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;灾难&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;西部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;西部&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;纪录片&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;纪录片&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;短片&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;短片&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;地区&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;地区&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部地区&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;华语&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;华语&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;欧美&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;欧美&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国大陆&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国大陆&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;美国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;美国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国香港&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国香港&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国台湾&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国台湾&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;英国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;英国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;法国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;法国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;德国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;德国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;意大利&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;意大利&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;西班牙&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;西班牙&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;印度&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;印度&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;泰国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;泰国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;俄罗斯&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;俄罗斯&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;加拿大&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;加拿大&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;澳大利亚&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;澳大利亚&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;爱尔兰&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;爱尔兰&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;瑞典&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;瑞典&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;巴西&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;巴西&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;丹麦&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;丹麦&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;sort&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;排序&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;近期热度&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;T&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;首映时间&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;R&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;高分优先&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;S&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;年代&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;年代&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2010年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2010年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2000年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2000年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;90年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;90年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;80年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;80年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;70年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;70年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;60年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;60年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;更早&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;更早&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">]</span><span class="p">,</span> <span class="s1">&#39;tv&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;类型&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;类型&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;不限&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;电视剧&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;电视剧&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;综艺&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;综艺&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;电视剧形式&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;电视剧形式&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;不限&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;喜剧&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;喜剧&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;爱情&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;爱情&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;悬疑&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;悬疑&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;动画&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;动画&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;武侠&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;武侠&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;古装&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;古装&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;家庭&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;家庭&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;犯罪&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;犯罪&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;科幻&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;科幻&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;恐怖&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;恐怖&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;历史&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;历史&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;战争&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;战争&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;动作&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;动作&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;冒险&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;冒险&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;传记&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;传记&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;剧情&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;剧情&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;奇幻&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;奇幻&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;惊悚&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;惊悚&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;灾难&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;灾难&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;歌舞&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;歌舞&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;音乐&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;音乐&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;综艺形式&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;综艺形式&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;不限&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;真人秀&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;真人秀&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;脱口秀&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;脱口秀&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;音乐&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;音乐&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;歌舞&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;歌舞&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;地区&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;地区&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部地区&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;华语&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;华语&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;欧美&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;欧美&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;国外&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;国外&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国大陆&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国大陆&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国香港&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国香港&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;美国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;美国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;英国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;英国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;泰国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;泰国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国台湾&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国台湾&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;意大利&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;意大利&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;法国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;法国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;德国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;德国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;西班牙&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;西班牙&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;俄罗斯&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;俄罗斯&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;瑞典&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;瑞典&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;巴西&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;巴西&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;丹麦&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;丹麦&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;印度&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;印度&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;加拿大&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;加拿大&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;爱尔兰&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;爱尔兰&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;澳大利亚&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;澳大利亚&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;sort&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;排序&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;近期热度&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;T&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;首播时间&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;R&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;高分优先&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;S&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;年代&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;年代&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2010年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2010年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2000年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2000年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;90年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;90年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;80年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;80年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;70年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;70年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;60年代&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;60年代&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;更早&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;更早&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;平台&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;平台&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;腾讯视频&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;腾讯视频&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;爱奇艺&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;爱奇艺&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;优酷&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;优酷&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;湖南卫视&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;湖南卫视&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;Netflix&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;Netflix&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;HBO&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;HBO&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;BBC&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;BBC&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;NHK&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;NHK&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;CBS&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;CBS&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;NBC&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;NBC&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;tvN&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;tvN&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">]</span><span class="p">,</span> <span class="s1">&#39;rank_list_movie&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;榜单&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;榜单&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;实时热门电影&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;movie_real_time_hotest&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;一周口碑电影榜&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;movie_weekly_best&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;豆瓣电影Top250&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;movie_top250&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">]</span><span class="p">,</span> <span class="s1">&#39;rank_list_tv&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;榜单&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;榜单&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;实时热门电视&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;tv_real_time_hotest&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;华语口碑剧集榜&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;tv_chinese_best_weekly&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全球口碑剧集榜&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;tv_global_best_weekly&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;国内口碑综艺榜&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;show_chinese_best_weekly&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;国外口碑综艺榜&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;show_global_best_weekly&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L26" class="lines-num">
								<span id="L26" data-line-number="26"></span>
							</td>
							<td rel="L26" class="lines-code chroma">
								<code>    <span class="nx">limit</span><span class="o">:</span><span class="mi">20</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L27" class="lines-num">
								<span id="L27" data-line-number="27"></span>
							</td>
							<td rel="L27" class="lines-code chroma">
								<code>    <span class="nx">play_parse</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L28" class="lines-num">
								<span id="L28" data-line-number="28"></span>
							</td>
							<td rel="L28" class="lines-code chroma">
								<code>    <span class="nx">推荐</span><span class="o">:</span><span class="s1">&#39;&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L29" class="lines-num">
								<span id="L29" data-line-number="29"></span>
							</td>
							<td rel="L29" class="lines-code chroma">
								<code>    <span class="nx">推荐</span><span class="o">:</span><span class="s1">&#39;js:let d=[];let douban_api_host=&#34;http://api.douban.com/api/v2&#34;;let miniapp_apikey=&#34;0ac44ae016490db2204ce0a042db2916&#34;;const count=30;function miniapp_request(path,query){try{let url=douban_api_host+path;query.apikey=miniapp_apikey;fetch_params.headers=oheaders;url=buildUrl(url,query);let html=fetch(url,fetch_params);return JSON.parse(html)}catch(e){print(&#34;发生了错误:&#34;+e.message);return{}}}function subject_real_time_hotest(){try{let res=miniapp_request(&#34;/subject_collection/subject_real_time_hotest/items&#34;,{});let lists=[];let arr=res.subject_collection_items||[];arr.forEach(function(item){if(item.type===&#34;movie&#34;||item.type===&#34;tv&#34;){let rating=item.rating?item.rating.value:&#34;暂无评分&#34;;let honnor=(item.honor_infos||[]).map(function(it){return it.title}).join(&#34;|&#34;);lists.append({vod_id:&#34;msearch:&#34;+TYPE,vod_name:item.title||&#34;&#34;,vod_pic:item.pic.normal,vod_remarks:rating+&#34; &#34;+honnor})}});return lists}catch(e){print(&#34;发生了错误:&#34;+e.message);return[]}}VODS=subject_real_time_hotest();print(VODS);&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L30" class="lines-num">
								<span id="L30" data-line-number="30"></span>
							</td>
							<td rel="L30" class="lines-code chroma">
								<code>    <span class="c1">// 手动调用解析请求json的url,此lazy不方便</code>
							</td>
						</tr>
						
						<tr>
							<td id="L31" class="lines-num">
								<span id="L31" data-line-number="31"></span>
							</td>
							<td rel="L31" class="lines-code chroma">
								<code></span><span class="c1"></span>    <span class="nx">lazy</span><span class="o">:</span><span class="s1">&#39;&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L32" class="lines-num">
								<span id="L32" data-line-number="32"></span>
							</td>
							<td rel="L32" class="lines-code chroma">
								<code>    <span class="c1">// 推荐:&#39;.list_item;img&amp;&amp;alt;img&amp;&amp;src;a&amp;&amp;Text;a&amp;&amp;data-float&#39;,</code>
							</td>
						</tr>
						
						<tr>
							<td id="L33" class="lines-num">
								<span id="L33" data-line-number="33"></span>
							</td>
							<td rel="L33" class="lines-code chroma">
								<code></span><span class="c1"></span>    <span class="nx">一级</span><span class="o">:</span><span class="s1">&#39;&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L34" class="lines-num">
								<span id="L34" data-line-number="34"></span>
							</td>
							<td rel="L34" class="lines-code chroma">
								<code>    <span class="nx">一级</span><span class="o">:</span><span class="s1">&#39;js:let d=[];let douban=input.split(&#34;douban=&#34;)[1].split(&#34;&amp;&#34;)[0];let douban_api_host=&#34;http://api.douban.com/api/v2&#34;;let miniapp_apikey=&#34;0ac44ae016490db2204ce0a042db2916&#34;;const count=30;function miniapp_request(path,query){try{let url=douban_api_host+path;query.apikey=miniapp_apikey;fetch_params.headers=oheaders;url=buildUrl(url,query);let html=fetch(url,fetch_params);if(/request_error/.test(html)){print(html)}return JSON.parse(html)}catch(e){print(&#34;发生了错误:&#34;+e.message);return{}}}function cate_filter(d,douban){douban=douban||&#34;&#34;;try{let res={};if(MY_CATE===&#34;interests&#34;){if(douban){let status=MY_FL.status||&#34;mark&#34;;let subtype_tag=MY_FL.subtype_tag||&#34;&#34;;let year_tag=MY_FL.year_tag||&#34;全部&#34;;let path=&#34;/user/&#34;+douban+&#34;/interests&#34;;res=miniapp_request(path,{type:&#34;movie&#34;,status:status,subtype_tag:subtype_tag,year_tag:year_tag,start:(MY_PAGE-1)*count,count:count})}else{return{}}}else if(MY_CATE===&#34;hot_gaia&#34;){let sort=MY_FL.sort||&#34;recommend&#34;;let area=MY_FL.area||&#34;全部&#34;;let path=&#34;/movie/&#34;+MY_CATE;res=miniapp_request(path,{area:area,sort:sort,start:(MY_PAGE-1)*count,count:count})}else if(MY_CATE===&#34;tv_hot&#34;||MY_CATE===&#34;show_hot&#34;){let stype=MY_FL.type||MY_CATE;let path=&#34;/subject_collection/&#34;+stype+&#34;/items&#34;;res=miniapp_request(path,{start:(MY_PAGE-1)*count,count:count})}else if(MY_CATE.startsWith(&#34;rank_list&#34;)){let id=MY_CATE===&#34;rank_list_movie&#34;?&#34;movie_real_time_hotest&#34;:&#34;tv_real_time_hotest&#34;;id=MY_FL.榜单||id;let path=&#34;/subject_collection/&#34;+id+&#34;/items&#34;;res=miniapp_request(path,{start:(MY_PAGE-1)*count,count:count})}else{let path=&#34;/&#34;+MY_CATE+&#34;/recommend&#34;;let selected_categories;let tags;let sort;if(Object.keys(MY_FL).length&gt;0){sort=MY_FL.sort||&#34;T&#34;;tags=Object.values(MY_FL).join(&#34;,&#34;);if(MY_CATE===&#34;movie&#34;){selected_categories={&#34;类型&#34;:MY_FL.类型||&#34;&#34;,&#34;地区&#34;:MY_FL.地区||&#34;&#34;}}else{selected_categories={&#34;类型&#34;:MY_FL.类型||&#34;&#34;,&#34;形式&#34;:MY_FL.类型?MY_FL.类型+&#34;地区&#34;:&#34;&#34;,&#34;地区&#34;:MY_FL.地区||&#34;&#34;}}}else{sort=&#34;T&#34;;tags=&#34;&#34;;if(MY_CATE===&#34;movie&#34;){selected_categories={&#34;类型&#34;:&#34;&#34;,&#34;地区&#34;:&#34;&#34;}}else{selected_categories={&#34;类型&#34;:&#34;&#34;,&#34;形式&#34;:&#34;&#34;,&#34;地区&#34;:&#34;&#34;}}}let params={tags:tags,sort:sort,refresh:0,selected_categories:stringify(selected_categories),start:(MY_PAGE-1)*count,count:count};res=miniapp_request(path,params)}let result={page:MY_PAGE,pagecount:Math.ceil(res.total/count),limit:count,total:res.total};let items=[];if(/^rank_list|tv_hot|show_hot/.test(MY_CATE)){items=res[&#34;subject_collection_items&#34;]}else if(MY_CATE===&#34;interests&#34;){res[&#34;interests&#34;].forEach(function(it){items.push(it.subject)})}else{items=res.items}let lists=[];items.forEach(function(item){if(item.type===&#34;movie&#34;||item.type===&#34;tv&#34;){let rating=item.rating?item.rating.value:&#34;&#34;;let rat_str=rating||&#34;暂无评分&#34;;let title=item.title;let honor=item.honor_infos||[];let honor_str=honor.map(function(it){return it.title}).join(&#34;|&#34;);let vod_obj={vod_name:title!==&#34;未知电影&#34;?title:&#34;暂不支持展示&#34;,vod_pic:item.pic.normal,vod_remarks:rat_str+&#34; &#34;+honor_str};let vod_obj_d={url:item.type+&#34;$&#34;+item.id,title:title!==&#34;未知电影&#34;?title:&#34;暂不支持展示&#34;,pic_url:item.pic.normal,desc:rat_str+&#34; &#34;+honor_str};lists.push(vod_obj);d.push(vod_obj_d)}});result.list=lists;return result}catch(e){print(e.message)}return{}}let res=cate_filter(d,douban);setResult2(res);&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L35" class="lines-num">
								<span id="L35" data-line-number="35"></span>
							</td>
							<td rel="L35" class="lines-code chroma">
								<code>    <span class="nx">二级</span><span class="o">:</span><span class="s1">&#39;&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L36" class="lines-num">
								<span id="L36" data-line-number="36"></span>
							</td>
							<td rel="L36" class="lines-code chroma">
								<code>    <span class="nx">搜索</span><span class="o">:</span><span class="s1">&#39;&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L37" class="lines-num">
								<span id="L37" data-line-number="37"></span>
							</td>
							<td rel="L37" class="lines-code chroma">
								<code><span class="p">}</span>
</code>
							</td>
						</tr>
						
					</tbody>
				</table>
				
			
		</div>
	</div>
</div>


	<div class="i-text-center">
		
				
					<button id="createTraining" class="ui primary button mt-md">创建训练</button>
				
		
	</div>


<script>
function submitDeleteForm() {
    var message = prompt("delete_confirm_message\n\ndelete_commit_summary", "Delete ''");
    if (message != null) {
        $("#delete-message").val(message);
        $("#delete-file-form").submit()
    }
}
</script>

		
	</div>
	<div id="toListModel">
		<div class="ui modal" id="toShare">
			<i class="close icon black"></i>
			<div class="header">共享</div>
			<div class="content">
				<form autocomplete="off" class="ui form training ignore-dirty">
					
					<div class="fields">
						<p class="px-sm py-none mb-sm">共享页面将在匿名链接下呈现所选的代码和训练结果，不会显示项目的原始链接地址。但Agit系统不会自动处理代码和训练结果，因此如果需要为匿名盲审等场景提供匿名内容，还需要您自行保证代码内容和训练结果的匿名化。</p>
					</div>

					<div class="fields">
						<div class="two wide field required">
							<label>代码分支</label>
						</div>
						<div id="branchField" class="fourteen wide field">

							<div class="fitted item choose">
								<div class="ui floating filter dropdown custom">

									<div class="ui basic small compact button" style="min-width: 200px;" @click="menuVisible = !menuVisible">
										<span class="text">
											<i class="iconfont icon-branch-down"></i>
											<span v-text='isViewBranch?"分支":"目录树"'></span>:
                      <strong v-text='isViewBranch?(selectedBranch?selectedBranch:"请选择"):(selectedTag?selectedTag:"请选择")'></strong>
										</span>
										<i class="dropdown icon" tabIndex="-1"></i>
									</div>

									<div tabindex="-1"  id="scrolling" class="menu transition menu-share" :class="{visible: menuVisible}" v-show="menuVisible" @blur="menuVisible = false">

										<div class="ui icon search input" style="width: 200px;">
											<i class="filter icon"></i>
											<input name="search" v-model="searchTerm" @keydown="keydown($event)" placeholder="过滤分支或标签...">
										</div>

										<div class="header branch-tag-choice">
											<div class="ui grid">
												<div class="two column row">
													<a class="reference column" href="javascript:;" @click="handleBranchTab(true)">
														<span class="text" :class="{black: !isViewBranch}">
															<i class="iconfont icon-branch-down"></i>
															分支列表
														</span>
													</a>
													<a class="reference column" href="javascript:;" @click="handleBranchTab(false)">
														<span class="text" :class="{black: isViewBranch}">
															<i class="reference tags icon"></i>
															标签列表
														</span>
													</a>
												</div>
											</div>
										</div>

										<div v-show="isViewBranch" class="scrolling menu" ref="scrollContainer">
											<div v-for="(item, index) in branches" v-show="item.name.includes(searchTerm)" :key="item.name" class="item" @click="handleBranchOrTag(item)">
												<span v-text="item.name"></span>
											</div>
										</div>
										<div v-show="!isViewBranch" class="scrolling menu" ref="scrollContainer">
											<div v-for="(item, index) in tags" v-show="item.name.includes(searchTerm)" :key="item.name" class="item" @click="handleBranchOrTag(item)">
												<span v-text="item.name"></span>
											</div>
										</div>

										<div class="message" v-if="(isViewBranch && branches.length==0) || (!isViewBranch && tags.length==0)">未找到结果</div>
									</div>

									<div class="ui pointing red basic label" style="display:none;">
										请选择分支或标签
									</div>

								</div>
							</div>
						</div>
					</div>

					<div class="fields" v-show="selectedBranch">
						<div class="two wide field">
							<label>提交</label>
						</div>
						<div id="commitWrap" class="fourteen wide field">
							<select class="ui search selection dropdown commit-wrap" name="commit">
								<option value=""></option>
							</select>
						</div>
					</div>
					<div class="fields">
						<label class="two wide field  required">共享标题</label>
						<div class="fourteen wide field trainName-filed">
							<input v-model="shareName" type="text" name="shareName"  class="form-trainName" :maxlength="16"  placeholder="请输入标题内容，最多16个字符">
						</div>
					</div>
					<div class="ui grid uioption">
						<label class="required">链接有效期</label>
					</div>
					<div class="ui grid fields">
						<div class="thirteen wide column">
							<div class="ui four item stackable tabs menu ui-link-bg">
								<a v-for="(item, index) in shareTimeList" :key="index" :class="['item', activeIdx === item.shareTimeId ? 'active' : '']" data-tab="oneday" @click="handleMenuChange(item)">
									<span v-text="formatLinkTime(item.shareTimeName)"></span></a>
							</div>
						</div>
						<div class="right aligned three wide column action mt-3xs">
							<button class="ui primary button" @click="handleLink">
								生成链接</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="ui modal" id="toCopyShareLink">
			<i class="close icon black"></i>
			<div class="header">共享链接已生成</div>
			<div class="content ui form">
				<div class="fields">
					<div class="two wide field">
						<label>链接地址:</label>
					</div>
					<div  class="fourteen wide field">
						<p v-text="linkAddress" id="share_url"></p>
					</div>
				</div>
				<div class="fields uioption">
					<div class="two wide field">
					<label>链接有效期:</label>
					</div>
					<div class="fourteen wide field">
						<p v-text="linkExDate"></p>
					</div>
				</div>
				<div class="fields uioption">
							<div class="sixteen wide field" style="text-align: right">
								<button class="ui basic icon button poping primary up clipboard share-button" id="share-button" data-original="复制链接" data-success="已复制链接" data-error="请按下 ⌘-C 或 Ctrl-C 复制" data-content="复制链接" data-variation="inverted tiny"  data-clipboard-target="#share_url">
									复制
								</button>
							</div>
				</div>

			</div>
		</div>
	</div>

</div>
<div class="content">
	<p></p>
</div>
</div>
</div>




		

		</div>

		

		<footer>
	<div class="base-footer-content i-footer mx-auto">
		<div class="ui left">
			<div class="p-logo i-flex i-align-center">
				<img class="logo-icon" src="/img/logo/logo.svg">
				<i class="logo-text">&copy; 2023 Agit Cloud Computing, Ltd.</i>
				<a  id="version-a" style="margin-right: 16px; text-decoration: underline; font-size: 12px;" target="_blank" href="https://agit.ai/AgitDeveloper/AgitPythonExamples/wiki"></a>
			</div>
		</div>
		<div class="ui right links p-logo">
			<a style="margin-right: 16px; text-decoration: underline; font-size: 12px;" target="_blank" href="/agreement/terms">服务协议</a>
<a style="margin-right: 16px; text-decoration: underline; font-size: 12px;" target="_blank" href="/agreement/privacy">隐私政策</a>
<a style="text-decoration: underline; font-size: 12px; margin-right: 16px;" target="_blank" href="/opensource">开源软件</a>
<a style="text-decoration: underline; font-size: 12px;" target="_blank" id="help-a" target="_blank" href="http://help.agit.ai/">帮助</a>

		</div>
	</div>
</footer>



		

		
		
		
		<script src="/js/index.js?v=220846678a86246c9d7e7c46c21f20c2"></script>

		<script src="/vendor/plugins/vue/vue.min.js"></script>
<script src="/minifyjs/head_navbar.base.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/minifyjs/footer_content.base.js?v=220846678a86246c9d7e7c46c21f20c2"></script>


<script src="/vendor/plugins/promise-polyfill/polyfill.min.js"></script>
<script src="/vendor/plugins/cssrelpreload/loadCSS.min.js"></script>
<script src="/vendor/plugins/cssrelpreload/cssrelpreload.min.js"></script>
<script src="/vendor/plugins/vue-infinite-loading/vue-infinite-loading.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/vendor/plugins/Qrcode/qrcode.min.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/vendor/plugins/i-components/i.components.min.js?v=220846678a86246c9d7e7c46c21f20c2"></script>

<script src="/vendor/plugins/vue-node-spec/node-spec.min.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/vendor/plugins/jquery-migrate/jquery-migrate.min.js?v=3.0.1"></script>
<script src="/vendor/plugins/jquery.areyousure/jquery.are-you-sure.js"></script>
<script src="/vendor/plugins/emojify/emojify.custom.js"></script>
<script src="/vendor/plugins/xterm/xterm.js"></script>









	</body>
	</html>

<script>
$("#createTraining").click(function(){

	$api.trainReachUpperLimit({repoId:Number($('.repo-id').text())}).then(data => {
        if (!data) return;
		if(data.isUpperLimit){
			$ITools.handleToast('error', $i18n.tr('code', 'trainCountLimit'))
			return
		}

		const mode = $("#branchSelect").attr("data-mode"),
	      	branch = $("#branchSelect").find("strong").text();
		let path = ""
		$(".repo-path a").each(function(index,item){
			if(index === 0){
				return
			}
			path += path === ""?$(this).attr("title"):("/"+$(this).attr("title"))
		})
		const params={
			scriptPath: $(".repo-path").find(".active.section").attr("title"),
			workSpace: path,
			branchName: mode === "branches" ? branch : "",
			tagName: mode === "branches" ? "" : branch
		}
		window.location.href = window.location.origin + $('.repo-url').text() + '/training/create?scriptFile=' + escapePound(JSON.stringify(params))
      })


})
function toUpload(el) {

const tempSplit = $("#RepoSize").text().split("GB")


if (tempSplit.length === 2 && tempSplit[0] >= 1) {
	$ITools.handleToast('error', $i18n.tr('valid', 'fileSizeLimit'))
	return
}
window.location.href = $(el).attr("data-href")
}
function handleShare() {
$('#toShare').modal('show')
}
function shareLink() {
$('#toCopyShareLink').modal('show')
}
function escapePound(str){
	let res=""
	res=str.replaceAll("%","%25")
	res=res.replaceAll("#","%23")
	res=res.replaceAll(" ","%20")
	res=res.replaceAll("?","%3F")
	return res
}
</script>

<script src="/minifyjs/auth.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/minifyjs/repo_home.js?v=220846678a86246c9d7e7c46c21f20c2"></script>

