import Movie from '../homework__1';

test('create movie', () => {
    let received = new Movie(2012, 'USA', 'Avengers Assemble!', ['adventure', 'phantasy'], '137 min. / 02:17');

    let expected = {
        year: 2012,
        country: 'USA',
        slogan: 'Avengers Assemble!',
        genre: ['adventure', 'phantasy'],
        time: '137 min. / 02:17'
    }

    expect(received).toEqual(expected);
})