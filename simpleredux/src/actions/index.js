//This whole export part is the action creator
export const selectLibrary = (libraryId) => {
  //This return part is the action object
  return {
    type: 'select_library',
    payload: libraryId
  };
}
