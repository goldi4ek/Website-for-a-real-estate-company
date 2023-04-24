import PurposeStore from '../store/PurposeStore';

describe('PurposeStore', () => {
  let purposeStore;

  beforeEach(() => {
    purposeStore = new PurposeStore();
  });

  it('should set and get purposes', () => {
    const purposes = ['Purpose 1', 'Purpose 2'];
    purposeStore.setPurposes(purposes);
    expect(purposeStore.purposes).toEqual(purposes);
  });
});
