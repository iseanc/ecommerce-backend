const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // DONE: find all tags
  // DONE: be sure to include its associated Product data
  Tag.findAll({include:{all: true}}).then((tagData) => {
    res.json(tagData);
  });
});

router.get('/:id', (req, res) => {
  // DONE: find a single tag by its `id`
  // DONE: be sure to include its associated Product data
  Tag.findByPk(req.params.id, {include: {all:true}, order: [[Product,'product_name','ASC']]}).then((tagData) => {
    res.json(tagData);
  });
});

router.post('/', (req, res) => {
  // DONE: create a new tag
  // Only create new tag if it doesn't already exist
  Tag.findOrCreate({tag_name: req.body.tag_name,
    where: {tag_name: req.body.tag_name}})
    .then((newTag) => {
      res.json(newTag);
    }).catch((err) => {
       res.json(err); 
    });
  });


router.put('/:id', (req, res) => {
  // TODO: update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // TODO: delete on tag by its `id` value
});

module.exports = router;
