import { createContact, fetchContact, deleteOneContact } from "../http/contactAPI";
import { $host, $authHost } from "../http/index";

jest.mock("../http/index");

describe("createContact", () => {
  it("sends a POST request to the server", async () => {
    const mockContact = { name: "John Doe", email: "johndoe@example.com" };
    const mockData = { id: 1, ...mockContact };
    $host.post.mockResolvedValueOnce({ data: mockData });

    const result = await createContact(mockContact);

    expect($host.post).toHaveBeenCalledWith("api/contact", mockContact);
    expect(result).toEqual(mockData);
  });
});

describe("fetchContact", () => {
  it("sends a GET request to the server with an authorization header", async () => {
    const mockData = [{ id: 1, name: "John Doe", email: "johndoe@example.com" }];
    $authHost.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchContact();

    expect($authHost.get).toHaveBeenCalledWith("api/contact");
    expect(result).toEqual(mockData);
  });
});

describe("deleteOneContact", () => {
  it("sends a DELETE request to the server with an authorization header and the correct ID", async () => {
    const mockId = 1;
    const mockData = { message: "Contact deleted" };
    $authHost.delete.mockResolvedValueOnce({ data: mockData });

    const result = await deleteOneContact(mockId);

    expect($authHost.delete).toHaveBeenCalledWith(`api/contact/${mockId}`);
    expect(result).toEqual(mockData);
  });
});
