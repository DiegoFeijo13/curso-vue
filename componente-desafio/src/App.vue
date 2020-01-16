<template>
	<v-app>
		<app-menu/>
		<app-header/>
		<app-gallery/>		
		<app-footer/>		
	</v-app>
</template>

<script>
import Menu from './Menu.vue'
import Header from './Header.vue'
import Gallery from './Gallery.vue'
import Footer from './Footer.vue'

export default {
	components: {
		'app-menu': Menu,
		'app-header': Header,
		'app-gallery': Gallery,
		'app-footer': Footer
		}	
}
</script>
