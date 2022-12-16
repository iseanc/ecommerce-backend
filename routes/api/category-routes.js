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

router.put('/:id', async (req, res) => {
  // DONE: update a category by its `id` value
  try {
    const categoryData = await Category.update({category_name: req.body.category_name}, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json("Update successful!");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // DONE: delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json("Successfully deleted category!");
    })
    .catch((err) => res.json(err));
});

module.exports = router;
