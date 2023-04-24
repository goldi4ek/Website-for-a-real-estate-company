const { Contact } = require('../../models/models');
const ContactController = require('../../controllers/contactController');
const ApiError = require('../../error/ApiError');

describe('ContactController', () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      body: {},
      query: {},
      params: {},
    };
    res = {
      json: jest.fn(),
    };
    next = jest.fn();
  });

  describe('create', () => {
    it('should create a new contact', async () => {
      req.body = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        message: 'Hello world!',
      };

      const expectedContact = {
        id: expect.any(String),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      };

      Contact.create = jest.fn().mockResolvedValue(expectedContact);

      await ContactController.create(req, res, next);

      expect(Contact.create).toHaveBeenCalledWith(req.body);
      expect(res.json).toHaveBeenCalledWith(expectedContact);
    });

    it('should call next with ApiError on error', async () => {
      const errorMessage = 'Error message';
      const error = new Error(errorMessage);

      Contact.create = jest.fn().mockRejectedValue(error);

      await ContactController.create(req, res, next);

      expect(next).toHaveBeenCalledWith(ApiError.badRequest(errorMessage));
    });
  });

  describe('getAll', () => {
    it('should get all contacts with default limit and page', async () => {
      const expectedContacts = {
        count: 10,
        rows: [
          {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            phone: '1234567890',
            message: 'Hello world!',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: '2',
            name: 'Jane Doe',
            email: 'jane@example.com',
            phone: '0987654321',
            message: 'Hi there!',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
      };

      Contact.findAndCountAll = jest.fn().mockResolvedValue(expectedContacts);

      await ContactController.getAll(req, res);

      expect(Contact.findAndCountAll).toHaveBeenCalledWith({
        limit: 9,
        offset: 0,
      });
      expect(res.json).toHaveBeenCalledWith(expectedContacts);
    });

    it('should get all contacts with custom limit and page', async () => {
      req.query = {
        limit: 5,
        page: 2,
      };

      const expectedContacts = {
        count: 10,
        rows: [
          {
            id: '3',
            name: 'Bob Smith',
            email: 'bob@example.com',
            phone: '5551234',
            message: 'Hey!',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
      };

      Contact.findAndCountAll = jest.fn().mockResolvedValue(expectedContacts);

      await ContactController.getAll(req, res);

      expect(Contact.findAndCountAll).toHaveBeenCalledWith({
        limit: req.query.limit,
        offset: (req.query.page - 1) * req.query.limit,
      });
      expect(res.json).toHaveBeenCalledWith(expectedContacts);
    });
  });

  describe('getOne', () => {
    it('should get one contact by id', async () => {
      const expectedContact = {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        message: 'Hello world!',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      req.params.id = expectedContact.id;

      Contact.findOne = jest.fn().mockResolvedValue(expectedContact);

      await ContactController.getOne(req, res);

      expect(Contact.findOne).toHaveBeenCalledWith({
        where: { id: req.params.id },
      });
      expect(res.json).toHaveBeenCalledWith(expectedContact);
    });
  });
});