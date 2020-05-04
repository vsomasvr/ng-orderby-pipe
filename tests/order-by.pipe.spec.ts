import {OrderByPipe} from '../src/order-by.pipe';

describe('OrderByPipe Tests', () => {
    let pipe: OrderByPipe;
    beforeEach(() => {
        pipe = new OrderByPipe();
    });

    it('Should order an array of strings', () => {
        const values = ['Think Pad', 'Macbook Pro', 'Galago Pro', 'XPS'];
        const result = pipe.transform(values);

        expect(result).toEqual(['Galago Pro', 'Macbook Pro', 'Think Pad', 'XPS']);
        const result2 = pipe.transform(values, '', 'desc');
        expect(result2).toEqual(['XPS', 'Think Pad', 'Macbook Pro', 'Galago Pro']);
    });

    it('Should order an array of objects', () => {
        const values = [
            {
                name: 'Think Pad',
                order: 2017
            },
            {
                name: 'Macbook Pro',
                order: 2016
            },
            {
                name: 'Galago Pro',
                order: 2020
            },
            {
                name: 'XPS',
                order: 2019
            }
        ];
        const result = pipe.transform(values, 'name');

        expect(result).toEqual([
            {
                name: 'Galago Pro',
                order: 2020
            },
            {
                name: 'Macbook Pro',
                order: 2016
            },
            {
                name: 'Think Pad',
                order: 2017
            },
            {
                name: 'XPS',
                order: 2019
            }
        ]);

        const result2 = pipe.transform(values, 'name' , 'desc');

        expect(result2).toEqual([
            {
                name: 'XPS',
                order: 2019
            },
            {
                name: 'Think Pad',
                order: 2017
            },
            {
                name: 'Macbook Pro',
                order: 2016
            },
            {
                name: 'Galago Pro',
                order: 2020
            }
        ]);
    });

    it('Should order an array of objects with nested object', () => {
        const values = [
            {
                name: 'Think Pad',
                order: 2017,
                config: {
                    memory: 32
                }
            },
            {
                name: 'Macbook Pro',
                order: 2016,
                config: {
                    memory: 16
                }
            },
            {
                name: 'Galago Pro',
                order: 2020,
                config: {
                    memory: 64
                }
            },
            {
                name: 'XPS',
                order: 2019,
                config: {
                    memory: 8
                }
            }
        ];
        const result = pipe.transform(values, 'config.memory');

        expect(result).toEqual([
            {
                name: 'XPS',
                order: 2019,
                config: {
                    memory: 8
                }
            },
            {
                name: 'Macbook Pro',
                order: 2016,
                config: {
                    memory: 16
                }
            },
            {
                name: 'Think Pad',
                order: 2017,
                config: {
                    memory: 32
                }
            },
            {
                name: 'Galago Pro',
                order: 2020,
                config: {
                    memory: 64
                }
            }
        ]);

        const result2 = pipe.transform(values, 'config.memory' , 'desc');

        expect(result2).toEqual([
            {
                name: 'Galago Pro',
                order: 2020,
                config: {
                    memory: 64
                }
            },
            {
                name: 'Think Pad',
                order: 2017,
                config: {
                    memory: 32
                }
            },
            {
                name: 'Macbook Pro',
                order: 2016,
                config: {
                    memory: 16
                }
            },
            {
                name: 'XPS',
                order: 2019,
                config: {
                    memory: 8
                }
            }
        ]);
    });
});
