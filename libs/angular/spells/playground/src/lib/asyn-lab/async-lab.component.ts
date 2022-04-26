import {Component} from '@angular/core';
import {LogInDomService} from "@js-lab/ang-spells-shared/lib/services/log-in-dom.service";

@Component({
  selector: 'ang-spells-playground-async-lab',
  templateUrl: './async-lab.component.html',
  styleUrls: ['./async-lab.component.scss']
})
export class AsyncLabComponent {

  constructor(private logInDom: LogInDomService) {
  }


  action() {
    // empty
  }

  * promiseStuff(n: number): IterableIterator<number> {
    let iterationCount = 0;
    for (let i = 0; i < n; i += 1) {
      iterationCount++;
      yield i;
    }
    return iterationCount;

  }

  fino = (n: number): number => {
    if (n <= 1) {
      return 1
    }
    return this.fino(n - 1) + this.fino(n - 2);
  }


  // eslint-disable-next-line @typescript-eslint/ban-types
  memoizer = (fn: Function) => {
    const cache: any = {}
    return (...args: any) => {
      const strArgs = JSON.stringify(args);
      cache[strArgs] = typeof cache[strArgs] === "undefined"
        ? fn(...args)
        : cache[strArgs];
      return cache[strArgs]
    }
  }

  test() {
    const memoizer1 = this.memoizer(this.fino)(10);
    console.log(memoizer1)
  }


  recursive = (it: IterableIterator<number>) => {

    const result = it.next()
    console.log(result.value);

    if (result.done) {
      console.log("iterator for " + result.value)
      return
    }

    setTimeout(() => {
      this.recursive(it)
    }, Math.random() * 1000);

  }

  promiseITer = async () => {

    const it = this.promiseStuff(10);
    this.recursive(it)
  }

  promise = async () => {
    const all = Array.from(Array(10).keys())
      .map(i => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            return Math.random() < 0.5 ? resolve(i + ": Promise RESOLVE.") : reject(i + ":Promise REJECTED.");
          }, Math.random() * 5000);

        })
          .then(res => {
            this.logInDom.log.next(res)
            return res
          }, err => {
            this.logInDom.log.next(err)
            return err
          })


      })

    Promise.all(all)
      .then(c => console.log(c))
      .catch(console.log)
      .finally(() => this.logInDom.log.next("THE END"))


  }

  logAsync = async (msg: any, time: number) => {
    this.logInDom.log.next(msg)
    await this.wait(time);
  }

  wait(time: number) {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }
}


