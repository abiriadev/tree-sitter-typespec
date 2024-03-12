/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.export = grammar({
	name: 'TypeSpec',

	rules: {
		source_file: $ => 'hello',
	},
})
