/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
	name: 'TypeSpec',

	rules: {
		source_file: $ => 'hello',
	},
})
