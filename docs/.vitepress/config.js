import { defineConfig } from 'vitepress';

export default defineConfig({
	base: '/person-site',
	title: '博客',
	description: '下一代博客',
	lang: 'zh-CN',
	lastUpdated: true,
	head: [
		['link', { rel: 'icon', href: '/IamZJT.png' }]
	],
	vue: {
		reactivityTransform: true
	},
	themeConfig: {
		logo: '/IamZJT.png',
		siteTitle: 'IamZJT',
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/iamzjt-front-end' },
			{
				icon: {
					svg: '<svg width="36" height="28" viewBox="0 0 36 28" fill="#777777" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z" fill="#487DF8"/></svg>'
				},
				link: 'https://juejin.cn/user/958429872532632'
			}
		],
		nav: [
			{ text: '文章', link: '/article/index', activeMatch: '/article/' },
			{ text: '关于', link: '/about/index', activeMatch: '/about/' }
		],
		sidebar: {
			'/article/': [
				{
					items: [
						{ text: '归档', link: '/article/index' }
					]
				}
			]
		}
	}
});
