import { getAll } from '../services/countries/getAll';
import { getOne } from '../services/countries/getOne';
import { create } from '../services/countries/create';
import { update } from '../services/countries/update';

export function getAllData(req, res) {
  try {
    getAll().then(data => {
      res.status(200).json(data);
    }).catch(e => {
      console.log(e);
    });

  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      error: true
    });
  }
};

export function getOneData(req, res) {
  try {
    const { id } = req.body;
    getOne(id).then(data => {
      res.status(200).json(data);
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      error: true
    });
  }
}

export async function createRegister(req, res) {
  try {
    const {name} = req.body;
    create(name)
    .then(data => {
      res.status(200).json({
        message: 'Created successfully',
        data: data
      });
    })
    .catch(e => {
      console.log(e);
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      error: true
    });
  }
}

export async function updateRegister(req, res) {
  try {
    const { name,id } = req.body;
    await update(id, name)
      .then(data => {
        res.json({
          message: 'Updated successfully',
          data: data
        });
      }
      ).catch(e => {
        console.log(e);
      });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      error: true
    });
  }
}