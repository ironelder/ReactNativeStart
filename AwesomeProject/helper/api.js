const requestTestAsync = async () => {
  try {
    const requestURL = '/web';
    let res = await api.get(requestURL, {
      body: {
        query: 'test',
        page: 1
      }
    });
    return res.body;
  }
  catch (err) {
    console.log('[requestTestAsync::err]', err);
  }
}