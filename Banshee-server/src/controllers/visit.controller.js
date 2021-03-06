import { getAll } from '../services/visits/getAll';
import { getOne } from '../services/visits/getOne';
import { create } from '../services/visits/create';
import { update } from '../services/visits/update';
import { getByClient } from '../services/visits/getByClient';


export function getByClientData(req, res) {
  try {
    const { clientId } = req.body;
    getByClient(clientId).then(data => {
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
    const { date, sellerId, net, visitTotal, description, clientId } = req.body;
    create(date, sellerId, net, visitTotal, description, clientId)
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
    const { id, date, sellerId, net, visitTotal, description, clientId } = req.body;
    await update(id, date, sellerId, net, visitTotal, description, clientId)
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