# Festival-Web

1- Para instalar el proyecto con sus dependencias usa npm i o npm install (para generar la carpeta node_modules)
2- npx gulp dev



//Utilidades (snippets)

////////////////////////////////////

	"media query":  {
		"prefix": "mq",
		"body": [
			"@include m.$1 {\n\t$2\n}"
		]
	},

	"importar mixins":  {
		"prefix": "imm",
		"body": [
			"@use 'base/mixins' as m;"
		]
	},

	"importar variables":  {
		"prefix": "imv",
		"body": [
			"@use 'base/variables' as v;"
		]
	}

///////////////////////////////////