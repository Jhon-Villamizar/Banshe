import { getAll } from '../services/states/getAll';
import { getOne } from '../services/states/getOne';
import { create } from '../services/states/create';
import { update } from '../services/states/update';
import { getByCountry } from '../services/states/getByCountry';



export function getByCountryData(req, res) {
  try {
    const { countryId } = req.body;
    getByCountry(countryId).then(data => {
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
      res.status(200).json( data);
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
    const { name, countryId} = req.body;
    create(name, countryId)
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
    const { name, countryId,id } = req.body;
    await update(id, name, countryId)
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