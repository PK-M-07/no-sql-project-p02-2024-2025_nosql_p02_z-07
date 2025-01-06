use("przepisy");


db.createCollection("śniadania", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "_id",
        "name",
        "ingredients",
        "instructions",
        "meal_type",
        "prep_time",
        "calories",
        "isVege",
        "createdAt",
        "updatedAt"
      ],
      properties: {
        _id: {
          type: "number",
        },
        name: {
          type: "string",
          minLength: 5,
        },
        ingredients: {
          type: "array",
          minItems: 2,
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                minLength: 2,
              },
              quantity: {
                type: "number",
              },
              unit: {
                type: "string",
                minLength: 1,
              },
            },
            required: ["name"],
          },
        },
        instructions: {
          type: "string",
          minLength: 10,
        },
        meal_type: {
          type: "string",
          enum: ["śniadania", "obiady", "kolacje", "przekąski", "desery"],
        },
        prep_time: {
          type: "number",
          minimum: 1,
        },
        calories: {
          type: "number",
          minimum: 10,
        },
        isVege: {
          type: "boolean",
        },
        createdAt: {
          bsonType: "date",
        },
        updatedAt: {
          bsonType: "date",
        }
      },
    },
  },
  validationLevel: "strict",
  validationAction: "error",
});



  // -------------------------------------------------------------------------------------------------------------------
db.createCollection("obiady", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "_id",
        "name",
        "ingredients",
        "instructions",
        "meal_type",
        "prep_time",
        "calories",
        "isVege",
        "createdAt",
        "updatedAt"
      ],
      properties: {
        _id: {
          type: "number",
        },
        name: {
          type: "string",
          minLength: 5,
        },
        ingredients: {
          type: "array",
          minItems: 2,
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                minLength: 2,
              },
              quantity: {
                type: "number",
              },
              unit: {
                type: "string",
                minLength: 1,
              },
            },
            required: ["name"],
          },
        },
        instructions: {
          type: "string",
          minLength: 10,
        },
        meal_type: {
          type: "string",
          enum: ["śniadania", "obiady", "kolacje", "przekąski", "desery"],
        },
        prep_time: {
          type: "number",
          minimum: 1,
        },
        calories: {
          type: "number",
          minimum: 10,
        },
        isVege: {
          type: "boolean",
        },
        createdAt: {
          bsonType: "date",
        },
        updatedAt: {
          bsonType: "date",
        }
      },
    },
  },
  validationLevel: "strict",
  validationAction: "error",
});


  // -------------------------------------------------------------------------------------------------------------------
db.createCollection("kolacje", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "_id",
        "name",
        "ingredients",
        "instructions",
        "meal_type",
        "prep_time",
        "calories",
        "isVege",
        "createdAt",
        "updatedAt"
      ],
      properties: {
        _id: {
          type: "number",
        },
        name: {
          type: "string",
          minLength: 5,
        },
        ingredients: {
          type: "array",
          minItems: 2,
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                minLength: 2,
              },
              quantity: {
                type: "number",
              },
              unit: {
                type: "string",
                minLength: 1,
              },
            },
            required: ["name"],
          },
        },
        instructions: {
          type: "string",
          minLength: 10,
        },
        meal_type: {
          type: "string",
          enum: ["śniadania", "obiady", "kolacje", "przekąski", "desery"],
        },
        prep_time: {
          type: "number",
          minimum: 1,
        },
        calories: {
          type: "number",
          minimum: 10,
        },
        isVege: {
          type: "boolean",
        },
        createdAt: {
          bsonType: "date",
        },
        updatedAt: {
          bsonType: "date",
        }
      },
    },
  },
  validationLevel: "strict",
  validationAction: "error",
});


  // -------------------------------------------------------------------------------------------------------------------
db.createCollection("przekaski", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "_id",
        "name",
        "ingredients",
        "instructions",
        "meal_type",
        "prep_time",
        "calories",
        "isVege",
        "createdAt",
        "updatedAt"
      ],
      properties: {
        _id: {
          type: "number",
        },
        name: {
          type: "string",
          minLength: 5,
        },
        ingredients: {
          type: "array",
          minItems: 2,
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                minLength: 2,
              },
              quantity: {
                type: "number",
              },
              unit: {
                type: "string",
                minLength: 1,
              },
            },
            required: ["name"],
          },
        },
        instructions: {
          type: "string",
          minLength: 10,
        },
        meal_type: {
          type: "string",
          enum: ["śniadania", "obiady", "kolacje", "przekąski", "desery"],
        },
        prep_time: {
          type: "number",
          minimum: 1,
        },
        calories: {
          type: "number",
          minimum: 10,
        },
        isVege: {
          type: "boolean",
        },
        createdAt: {
          bsonType: "date",
        },
        updatedAt: {
          bsonType: "date",
        }
      },
    },
  },
  validationLevel: "strict",
  validationAction: "error",
});


  // -------------------------------------------------------------------------------------------------------------------
db.createCollection("desery", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "_id",
        "name",
        "ingredients",
        "instructions",
        "meal_type",
        "prep_time",
        "calories",
        "isVege",
        "createdAt",
        "updatedAt"
      ],
      properties: {
        _id: {
          type: "number",
        },
        name: {
          type: "string",
          minLength: 5,
        },
        ingredients: {
          type: "array",
          minItems: 2,
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                minLength: 1,
              },
              quantity: {
                type: "number",
              },
              unit: {
                type: "string",
                minLength: 1,
              },
            },
            required: ["name"],
          },
        },
        instructions: {
          type: "string",
          minLength: 10,
        },
        meal_type: {
          type: "string",
          enum: ["śniadania", "obiady", "kolacje", "przekąski", "desery"],
        },
        prep_time: {
          type: "number",
          minimum: 1,
        },
        calories: {
          type: "number",
          minimum: 10,
        },
        isVege: {
          type: "boolean",
        },
        createdAt: {
          bsonType: "date",
        },
        updatedAt: {
          bsonType: "date",
        }
      },
    },
  },
  validationLevel: "strict",
  validationAction: "error",
});
