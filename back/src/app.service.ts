import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class AppService {
  getfilms(): string {
    return 'Hello World!';
  }

  async getGenres(): Promise<any> {
    console.log('genres');
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TD_TOKEN}`,
      },
    };

    const res = await fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        return json;
      })
      .catch((err) => console.error('error:' + err));

    return res;
  }

  async getFilterData(ur: string): Promise<any> {
    console.log('filter');
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TD_TOKEN}`,
      },
    };

    const res = await fetch(
      'https://api.themoviedb.org/3/discover/movie?' + ur,
      options,
    )
      .then((res) => res.json())
      .then((json) => {
        return json;
      })
      .catch((err) => console.error('error:' + err));
    return res;
  }

  async getById(id: any): Promise<any> {
    console.log('filter');
    const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos%2Cimages`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TD_TOKEN}`,
      },
    };

    const res = await fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        return json;
      })
      .catch((err) => console.error('error:' + err));
    return res;
  }

  async getData(ur: string): Promise<any> {
    console.log('filter');
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TD_TOKEN}`,
      },
    };

    const res = await fetch(
      'https://api.themoviedb.org/3/discover/movie?' + ur,
      options,
    )
      .then((res) => res.json())
      .then((json) => {
        return json;
      })
      .catch((err) => console.error('error:' + err));
    return res;
  }
}
