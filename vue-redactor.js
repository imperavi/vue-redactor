/*
    Redactor Vue Component
    Version 1.0.0
    Updated: August 23, 2018

    http://imperavi.com/redactor/

    Copyright 2018, Imperavi Ltd.
    License: MIT
*/
Vue.component('Redactor', {
    template: '<textarea ref="redactor" :name="name" :placeholder="placeholder" :value="value" />',
    redactor: false,
	props: {
        value: {
            default: '',
            type: String
        },
        placeholder: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        config: {
            default: {},
            type: Object
        }
    },
	watch: {
		value(newValue, oldValue)
		{
			if (!this.redactor.editor.isFocus()) this.redactor.source.setCode(newValue)
		}
	},
    mounted() {
        this.init()
    },
    methods: {
        init () {
            var me = this;
            var callbacks = {
                changed: function(html) {
                    me.handleInput(html)
                    return html
                }
            };

            // extend config
            Vue.set(this.config, 'callbacks', callbacks);

            // call Redactor
            var app = $R(this.$refs.redactor, this.config);

            // set instance
            this.redactor = app;
            this.$parent.redactor = app;
        },
        handleInput (val) {
            this.$emit('input', val);
        }
    }
});