/// <reference path="../pb_data/types.d.ts" />
migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('2o3djrkn2dxzvd7');

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: '5swzudcw',
				name: 'title',
				type: 'text',
				required: false,
				presentable: false,
				unique: false,
				options: {
					min: null,
					max: null,
					pattern: '',
				},
			})
		);

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'pjxmcdze',
				name: 'field',
				type: 'text',
				required: false,
				presentable: false,
				unique: false,
				options: {
					min: null,
					max: null,
					pattern: '',
				},
			})
		);

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('2o3djrkn2dxzvd7');

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: '5swzudcw',
				name: 'Title',
				type: 'text',
				required: false,
				presentable: false,
				unique: false,
				options: {
					min: null,
					max: null,
					pattern: '',
				},
			})
		);

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'pjxmcdze',
				name: 'Field',
				type: 'text',
				required: false,
				presentable: false,
				unique: false,
				options: {
					min: null,
					max: null,
					pattern: '',
				},
			})
		);

		return dao.saveCollection(collection);
	}
);
