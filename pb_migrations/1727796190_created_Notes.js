/// <reference path="../pb_data/types.d.ts" />
migrate(
	(db) => {
		const collection = new Collection({
			id: '2o3djrkn2dxzvd7',
			created: '2024-10-01 15:23:10.377Z',
			updated: '2024-10-01 15:23:10.377Z',
			name: 'Notes',
			type: 'base',
			system: false,
			schema: [
				{
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
				},
				{
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
				},
			],
			indexes: [],
			listRule: '',
			viewRule: '',
			createRule: '',
			updateRule: '',
			deleteRule: '',
			options: {},
		});

		return Dao(db).saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('2o3djrkn2dxzvd7');

		return dao.deleteCollection(collection);
	}
);
