import ContactStore from '../store/ContactStore';

describe('ContactStore', () => {
  it('should initialize with an empty contacts array', () => {
    const contactStore = new ContactStore();
    expect(contactStore.contacts).toEqual([]);
  });

  it('should set contacts', () => {
    const contactStore = new ContactStore();
    const newContacts = [
      { name: 'John', email: 'john@example.com' },
      { name: 'Jane', email: 'jane@example.com' },
    ];
    contactStore.setContacts(newContacts);
    expect(contactStore.contacts).toEqual(newContacts);
  });
});
