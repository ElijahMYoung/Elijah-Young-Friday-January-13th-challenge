import { NextFunction, Request, Response } from "express";
import logging from "../config/logging";
import { Connect, Query } from "../config/mysql";

const NAMESPACE = "Customers";

const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(NAMESPACE, "Inserting customers");

  let { customerName, contactLastName } = req.body;

  let query = `INSERT INTO customers (customerName, contactLastName) VALUES ("${customerName}", "${contactLastName}")`;

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((result) => {
          logging.info(NAMESPACE, "Customer created: ", result);

          return res.status(200).json({
            result,
          });
        })
        .catch((error) => {
          logging.error(NAMESPACE, error.message, error);

          return res.status(200).json({
            message: error.message,
            error,
          });
        })
        .finally(() => {
          logging.info(NAMESPACE, "Closing connection.");
          connection.end();
        });
    })
    .catch((error) => {
      logging.error(NAMESPACE, error.message, error);

      return res.status(200).json({
        message: error.message,
        error,
      });
    });
};

const getAllCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(NAMESPACE, "Getting all customers.");

  let query = "SELECT * FROM customers";

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((results) => {
          logging.info(NAMESPACE, "Retrieved customers: ", results);

          return res.status(200).json({
            results,
          });
        })
        .catch((error) => {
          logging.error(NAMESPACE, error.message, error);

          return res.status(200).json({
            message: error.message,
            error,
          });
        })
        .finally(() => {
          logging.info(NAMESPACE, "Closing connection.");
          connection.end();
        });
    })
    .catch((error) => {
      logging.error(NAMESPACE, error.message, error);

      return res.status(200).json({
        message: error.message,
        error,
      });
    });
};

export default { createCustomer, getAllCustomer };
