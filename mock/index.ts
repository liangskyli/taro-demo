export default {
  'GET /api/get-list': (_req: any, res: any) => {
    const json = {
      retCode: 0,
      data: { a: 1, b: 'bbb' },
      retMsg: '',
    };

    res.json(json);
  },

  'POST /api/save-data': (_req: any, res: any) => {
    const json = {
      retCode: 0,
      data: { a: 11, b: 'bbb1' },
      retMsg: '',
    };

    res.json(json);
  },
};
