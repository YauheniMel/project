const { Op } = require('sequelize');
const express = require('express');
const sqlz = require('../services/sequelize');

const router = express.Router();

router.get('/api/filterContains/', (req, res) => {
  const { column, str, collectionId } = req.query;

  sqlz.Item.findAll({
    where: {
      [Op.and]: [{ [column]: { [Op.like]: `%${str}%` } }, { collectionId }],
    },
    include: [
      {
        model: sqlz.Like,
        attributes: ['itemId'],
      },
      {
        model: sqlz.Tag,
        as: 'tags',
        attributes: ['content'],
      },
    ],
  })
    .then((result) => {
      const itemsWithImg = result.map((item) => {
        const { icon } = item;

        if (icon) {
          item.icon = Buffer.from(icon).toString('base64');
        }

        return item;
      });

      res.status(200).send(itemsWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/filterExistTag/', (req, res) => {
  const { str, collectionId } = req.query;

  sqlz.Item.findAll({
    where: { collectionId },
    include: [
      {
        model: sqlz.Tag,
        as: 'tags',
        attributes: ['content'],
        where: {
          content: str,
        },
        include: [
          {
            model: sqlz.Item,
            as: 'items',
            include: [
              {
                model: sqlz.Like,
                attributes: ['itemId'],
              },
              {
                model: sqlz.Tag,
                as: 'tags',
                attributes: ['content'],
              },
            ],
          },
        ],
      },
    ],
  })
    .then(([result]) => {
      const itemsWithImg = result.tags[0].items.map((item) => {
        const { icon } = item;

        if (icon) {
          item.icon = Buffer.from(icon).toString('base64');
        }

        return item;
      });

      res.status(200).send(itemsWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/filterStartsWith/', (req, res) => {
  const { column, str, collectionId } = req.query;

  sqlz.Item.findAll({
    where: {
      [Op.and]: [{ [column]: { [Op.startsWith]: `${str}` } }, { collectionId }],
    },
    include: [
      {
        model: sqlz.Like,
        attributes: ['itemId'],
      },
      {
        model: sqlz.Tag,
        as: 'tags',
        attributes: ['content'],
      },
    ],
  })
    .then((result) => {
      const itemsWithImg = result.map((item) => {
        const { icon } = item;

        if (icon) {
          item.icon = Buffer.from(icon).toString('base64');
        }

        return item;
      });

      res.status(200).send(itemsWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/filterMoreThan/', (req, res) => {
  const { column, num, collectionId } = req.query;

  sqlz.Item.findAll({
    where: {
      [Op.and]: [{ [column]: { [Op.gt]: `${num}` } }, { collectionId }],
    },
    include: [
      {
        model: sqlz.Like,
        attributes: ['itemId'],
      },
      {
        model: sqlz.Tag,
        as: 'tags',
        attributes: ['content'],
      },
    ],
  })
    .then((result) => {
      const itemsWithImg = result.map((item) => {
        const { icon } = item;

        if (icon) {
          item.icon = Buffer.from(icon).toString('base64');
        }

        return item;
      });

      res.status(200).send(itemsWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/filterLessThan/', (req, res) => {
  const { column, num, collectionId } = req.query;

  sqlz.Item.findAll({
    where: {
      [Op.and]: [
        { [column]: { [Op.lt]: `${num}` } },
        { collectionId },
        { [column]: { [Op.ne]: '' } },
      ],
    },
    include: [
      {
        model: sqlz.Like,
        attributes: ['itemId'],
      },
      {
        model: sqlz.Tag,
        as: 'tags',
        attributes: ['content'],
      },
    ],
  })
    .then((result) => {
      const itemsWithImg = result.map((item) => {
        const { icon } = item;

        if (icon) {
          item.icon = Buffer.from(icon).toString('base64');
        }

        return item;
      });

      res.status(200).send(itemsWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/filterIsNotEmpty/', (req, res) => {
  const { column, collectionId } = req.query;

  sqlz.Item.findAll({
    where: {
      [Op.and]: [{ [column]: { [Op.ne]: '' } }, { collectionId }],
    },
    include: [
      {
        model: sqlz.Like,
        attributes: ['itemId'],
      },
      {
        model: sqlz.Tag,
        as: 'tags',
        attributes: ['content'],
      },
    ],
  })
    .then((result) => {
      const itemsWithImg = result.map((item) => {
        const { icon } = item;

        if (icon) {
          item.icon = Buffer.from(icon).toString('base64');
        }

        return item;
      });

      res.status(200).send(itemsWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/filterIsEmpty/', (req, res) => {
  const { column, collectionId } = req.query;

  sqlz.Item.findAll({
    where: {
      [Op.and]: [
        // eslint-disable-next-line prefer-regex-literals
        { [column]: { [Op.eq]: '' } },
        { collectionId },
      ],
    },
    include: [
      {
        model: sqlz.Like,
        attributes: ['itemId'],
      },
      {
        model: sqlz.Tag,
        as: 'tags',
        attributes: ['content'],
      },
    ],
  })
    .then((result) => {
      const itemsWithImg = result.map((item) => {
        const { icon } = item;

        if (icon) {
          item.icon = Buffer.from(icon).toString('base64');
        }

        return item;
      });

      res.status(200).send(itemsWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/filterEqualsThunk/', (req, res) => {
  const { column, str, collectionId } = req.query;

  sqlz.Item.findAll({
    where: {
      [Op.and]: [{ [column]: { [Op.eq]: `${str}` } }, { collectionId }],
    },
    include: [
      {
        model: sqlz.Like,
        attributes: ['itemId'],
      },
      {
        model: sqlz.Tag,
        as: 'tags',
        attributes: ['content'],
      },
    ],
  })
    .then((result) => {
      const itemsWithImg = result.map((item) => {
        const { icon } = item;

        if (icon) {
          item.icon = Buffer.from(icon).toString('base64');
        }

        return item;
      });

      res.status(200).send(itemsWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

module.exports = router;
