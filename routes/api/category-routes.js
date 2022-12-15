const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // DONE: find all categories
  // DONE: be sure to include its associated Products
  Category.findAll({order: [['category_name','ASC'],[Product,'product_name','ASC']], include:{all: true}}).then((categoryData) => {
    res.json(categoryData);
  });
});

// Get one category
router.get('/:id', (req, res) => {
  // DONE: find one category by its `id` value
  // DONE: be sure to include its associated Products
  Category.findByPk(req.params.id, {include: {all: true}, order: [[Product,'product_name','ASC']]}).then((categoryData) => { 
    res.json(categoryData);
  })
});

router.post('/', (req, res) => {
  // DONE: create a new category
  // Only create a new category if it doesn't already exist
  Category.findOrCreate({
    where: {category_name: req.body.category_name}})
    .then((newCategory) => {
      res.json(newCategory);
    }).catch((err) => {
       res.json(err); 
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // TODO: delete a category by its `id` value
});

module.exports = router;
