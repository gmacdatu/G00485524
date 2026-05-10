import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class FavouritesData {

  private _storage: Storage | null = null;

  // method to get all favourite movies from ionic storage, used in favourites.page.ts
  async getAllFavourites() {
    const list: any[] = [];
    await this._storage?.forEach((value) => {
      list.push(value);
    });
    return list;
  }

  //Below line 10 to line 25 are from Week 10 Ionic Storage Demo and https://github.com/ionic-team/ionic-storage/blob/main/README.md

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  async set(key:string, value:any) {
    await this.storage.set(key, value);
  }

  async get(key: string) {
    return await this.storage.get('name');
  }
}
