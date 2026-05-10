import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class FavouritesData {

  //Below to line 22 is from Week 10 Ionnic Storage Demo and https://github.com/ionic-team/ionic-storage/blob/main/README.md

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
  }

  async set(key:string, value:any) {
    await this.storage.set(key, value);
  }
}
