import { async, TestBed } from '@angular/core/testing';
import { CardDeckUiModule } from './card-deck-ui.module';

describe('AngCardDeckModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CardDeckUiModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(CardDeckUiModule).toBeDefined();
  });
});
