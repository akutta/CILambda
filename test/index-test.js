var vows = require('vows'),
    assert = require('assert');
	
var index = require('../index.js');
vows.describe('index').addBatch({
	'Lambda': {
		'must specify cmd': {
			topic: function() {
				index.handler("{'body': {}}", null, this.callback)
			},
			
			'when executed errors out': function(result) {
				console.log(result);
				assert.equal(result, 'Please specify a command to run as event.cmd');
			}
		}
	}
}).export(module, {error: false});