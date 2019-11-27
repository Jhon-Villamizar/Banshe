import { getAll } from '../services/cities/getAll';
import { getOne } from '../services/cities/getOne';
import { create } from '../services/cities/create';
import { update } from '../services/cities/update';
import { getByState } from '../services/cities/getByState'


export function getByStateData(req, res) {
  try {
    const { stateId } = req.body;
    getByState(stateId).then(data => {
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
    const { name, stateId } = req.body;
    create(name, stateId)
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
    const { name, stateId,id } = req.body;
    await update(id, name, stateId )
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