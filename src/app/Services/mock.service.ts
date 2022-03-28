import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root',
})
export class MockService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return {
      products: [
        {
          id: 0,
          title: 'Neapolitan Pizza',
          inStock: 320,
          freshness: 'fresh',
          farm: 'Grocery Farm Fields',
          size: 'ultra large',
          description:
            'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot',
          descriptionSmall: 'Neapolitan pizza, or pizza Napoletana.',
          rating: 4,
          country: 'Italy',
          delivery: 'Local',
          deliveryArea: 'Local',
          price: 20.99,
          deliveryTime: 2,
          buyBy: ['pcs', 'kgs', 'box'],
          reviews: [
            {
              reviewer: 'John',
              reviewText: 'Like this one!',
              rDate: '22-03-2000',
              estimation: 5,
              comments: [
                {
                  commenter: 'Jim',
                  cDate: '23-03-2000',
                  cText: 'Totally agreed!',
                },
                {
                  commenter: 'UnknownUser',
                  cDate: '24-03-2000',
                  cText: 'Far far away, behind the',
                },
                {
                  commenter: 'BOB',
                  cDate: '23-03-2000',
                  cText: 'Some Think yea yea///',
                },
              ],
            },
          ],
        },
        


        
        {
          id: 1,
          title: 'Greece Salad',
          inStock: 200,
          freshness: 'fresh',
          farm: 'Grocery Farm Fields',
          size: 'medium',
          description:
            'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious, so I stick to it, just adding a handful of mint leaves for a fresh finishing touch.',
          descriptionSmall: 'A traditional Greek salad consists of sliced cucumbers.',
          rating: 4,
          country: 'Greece',
          delivery: 'EU East',
          deliveryArea: 'Local',
          price: 30.99,
          deliveryTime: 1,
          buyBy: ['pcs', 'kgs', 'box'],
          reviews: [
            {
              reviewer: 'John',
              reviewText: 'Like this one!',
              rDate: '22-03-2000',
              estimation: 3,
              comments: [
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Totaly agreed',
                },
                {
                  commenter: 'UnknownUser',
                  cDate: '24-03-2000',
                  cText: 'Far far away, behind the',
                },
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Some Think yea yea///',
                },
              ],
            },
          ],
        },
        


        {
          id: 0,
          title: 'Fruits',
          inStock: 320,
          freshness: 'fresh',
          farm: 'Grocery Farm Fields',
          size: 'ultra large',
          description:
            'What is a fruit? In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.',
          descriptionSmall: 'What is a fruit? In a botanical sense.',
          rating: 5,
          country: 'Africa',
          delivery: 'International',
          deliveryArea: 'World',
          price: 80,
          deliveryTime: 20,
          buyBy: ['pcs', 'kgs', 'box'],
          reviews: [
            {
              reviewer: 'John',
              reviewText: 'Like this one!',
              rDate: '22-03-2000',
              estimation: 5,
              comments: [
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Totaly agreed',
                },
                {
                  commenter: 'UnknownUser',
                  cDate: '24-03-2000',
                  cText: 'Far far away, behind the',
                },
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Some Think yea yea///',
                },
              ],
            },
          ],
        },
        


        {
          id: 0,
          title: 'Coffee',
          inStock: 10000,
          freshness: 'realy fresh',
          farm: 'Africa Coffee Farm',
          size: 'small',
          description:
            'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted',
          descriptionSmall: 'Neapolitan pizza, or pizza Napoletana.',
          rating: 3,
          country: 'Morocco',
          delivery: 'Global',
          deliveryArea: 'Local',
          price: 20.99,
          deliveryTime: 1,
          buyBy: ['pcs', 'kgs', 'box'],
          reviews: [
            {
              reviewer: 'John',
              reviewText: 'Like this one!',
              rDate: '22-03-2000',
              estimation: 5,
              comments: [
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Totaly agreed',
                },
                {
                  commenter: 'UnknownUser',
                  cDate: '24-03-2000',
                  cText: 'Far far away, behind the',
                },
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Some Think yea yea///',
                },
              ],
            },
          ],
        },
        {
          id: 0,
          title: 'Neapolitan Pizza',
          inStock: 320,
          freshness: 'fresh',
          farm: 'Grocery Farm Fields',
          size: 'ultra large',
          description:
            'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot',
          descriptionSmall: 'Neapolitan pizza, or pizza Napoletana.',
          rating: 4,
          country: 'Italy',
          delivery: 'Local',
          deliveryArea: 'Local',
          price: 20.99,
          deliveryTime: 2,
          buyBy: ['pcs', 'kgs', 'box'],
          reviews: [
            {
              reviewer: 'John',
              reviewText: 'Like this one!',
              rDate: '22-03-2000',
              estimation: 5,
              comments: [
                {
                  commenter: 'Jim',
                  cDate: '23-03-2000',
                  cText: 'Totally agreed!',
                },
                {
                  commenter: 'UnknownUser',
                  cDate: '24-03-2000',
                  cText: 'Far far away, behind the',
                },
                {
                  commenter: 'BOB',
                  cDate: '23-03-2000',
                  cText: 'Some Think yea yea///',
                },
              ],
            },
          ],
        },
        


        
        {
          id: 1,
          title: 'Greece Salad',
          inStock: 200,
          freshness: 'fresh',
          farm: 'Grocery Farm Fields',
          size: 'medium',
          description:
            'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious, so I stick to it, just adding a handful of mint leaves for a fresh finishing touch.',
          descriptionSmall: 'A traditional Greek salad consists of sliced cucumbers.',
          rating: 4,
          country: 'Greece',
          delivery: 'EU East',
          deliveryArea: 'Local',
          price: 30.99,
          deliveryTime: 1,
          buyBy: ['pcs', 'kgs', 'box'],
          reviews: [
            {
              reviewer: 'John',
              reviewText: 'Like this one!',
              rDate: '22-03-2000',
              estimation: 3,
              comments: [
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Totaly agreed',
                },
                {
                  commenter: 'UnknownUser',
                  cDate: '24-03-2000',
                  cText: 'Far far away, behind the',
                },
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Some Think yea yea///',
                },
              ],
            },
          ],
        },
        


        {
          id: 0,
          title: 'Fruits',
          inStock: 320,
          freshness: 'fresh',
          farm: 'Grocery Farm Fields',
          size: 'ultra large',
          description:
            'What is a fruit? In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.',
          descriptionSmall: 'What is a fruit? In a botanical sense.',
          rating: 5,
          country: 'Africa',
          delivery: 'International',
          deliveryArea: 'World',
          price: 80,
          deliveryTime: 20,
          buyBy: ['pcs', 'kgs', 'box'],
          reviews: [
            {
              reviewer: 'John',
              reviewText: 'Like this one!',
              rDate: '22-03-2000',
              estimation: 5,
              comments: [
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Totaly agreed',
                },
                {
                  commenter: 'UnknownUser',
                  cDate: '24-03-2000',
                  cText: 'Far far away, behind the',
                },
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Some Think yea yea///',
                },
              ],
            },
          ],
        },
        


        {
          id: 0,
          title: 'Coffee',
          inStock: 10000,
          freshness: 'realy fresh',
          farm: 'Africa Coffee Farm',
          size: 'small',
          description:
            'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted',
          descriptionSmall: 'Neapolitan pizza, or pizza Napoletana.',
          rating: 3,
          country: 'Morocco',
          delivery: 'Global',
          deliveryArea: 'Local',
          price: 20.99,
          deliveryTime: 1,
          buyBy: ['pcs', 'kgs', 'box'],
          reviews: [
            {
              reviewer: 'John',
              reviewText: 'Like this one!',
              rDate: '22-03-2000',
              estimation: 5,
              comments: [
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Totaly agreed',
                },
                {
                  commenter: 'UnknownUser',
                  cDate: '24-03-2000',
                  cText: 'Far far away, behind the',
                },
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Some Think yea yea///',
                },
              ],
            },
          ],
        },
        {
          id: 0,
          title: 'Neapolitan Pizza',
          inStock: 320,
          freshness: 'fresh',
          farm: 'Grocery Farm Fields',
          size: 'ultra large',
          description:
            'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot',
          descriptionSmall: 'Neapolitan pizza, or pizza Napoletana.',
          rating: 4,
          country: 'Italy',
          delivery: 'Local',
          deliveryArea: 'Local',
          price: 20.99,
          deliveryTime: 2,
          buyBy: ['pcs', 'kgs', 'box'],
          reviews: [
            {
              reviewer: 'John',
              reviewText: 'Like this one!',
              rDate: '22-03-2000',
              estimation: 5,
              comments: [
                {
                  commenter: 'Jim',
                  cDate: '23-03-2000',
                  cText: 'Totally agreed!',
                },
                {
                  commenter: 'UnknownUser',
                  cDate: '24-03-2000',
                  cText: 'Far far away, behind the',
                },
                {
                  commenter: 'BOB',
                  cDate: '23-03-2000',
                  cText: 'Some Think yea yea///',
                },
              ],
            },
          ],
        },
        


        
        {
          id: 1,
          title: 'Greece Salad',
          inStock: 200,
          freshness: 'fresh',
          farm: 'Grocery Farm Fields',
          size: 'medium',
          description:
            'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious, so I stick to it, just adding a handful of mint leaves for a fresh finishing touch.',
          descriptionSmall: 'A traditional Greek salad consists of sliced cucumbers.',
          rating: 4,
          country: 'Greece',
          delivery: 'EU East',
          deliveryArea: 'Local',
          price: 30.99,
          deliveryTime: 1,
          buyBy: ['pcs', 'kgs', 'box'],
          reviews: [
            {
              reviewer: 'John',
              reviewText: 'Like this one!',
              rDate: '22-03-2000',
              estimation: 3,
              comments: [
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Totaly agreed',
                },
                {
                  commenter: 'UnknownUser',
                  cDate: '24-03-2000',
                  cText: 'Far far away, behind the',
                },
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Some Think yea yea///',
                },
              ],
            },
          ],
        },
        


        {
          id: 0,
          title: 'Fruits',
          inStock: 320,
          freshness: 'fresh',
          farm: 'Grocery Farm Fields',
          size: 'ultra large',
          description:
            'What is a fruit? In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.',
          descriptionSmall: 'What is a fruit? In a botanical sense.',
          rating: 5,
          country: 'Africa',
          delivery: 'International',
          deliveryArea: 'World',
          price: 80,
          deliveryTime: 20,
          buyBy: ['pcs', 'kgs', 'box'],
          reviews: [
            {
              reviewer: 'John',
              reviewText: 'Like this one!',
              rDate: '22-03-2000',
              estimation: 5,
              comments: [
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Totaly agreed',
                },
                {
                  commenter: 'UnknownUser',
                  cDate: '24-03-2000',
                  cText: 'Far far away, behind the',
                },
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Some Think yea yea///',
                },
              ],
            },
          ],
        },
        


        {
          id: 0,
          title: 'Coffee',
          inStock: 10000,
          freshness: 'realy fresh',
          farm: 'Africa Coffee Farm',
          size: 'small',
          description:
            'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted',
          descriptionSmall: 'Neapolitan pizza, or pizza Napoletana.',
          rating: 3,
          country: 'Morocco',
          delivery: 'Global',
          deliveryArea: 'Local',
          price: 20.99,
          deliveryTime: 1,
          buyBy: ['pcs', 'kgs', 'box'],
          reviews: [
            {
              reviewer: 'John',
              reviewText: 'Like this one!',
              rDate: '22-03-2000',
              estimation: 5,
              comments: [
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Totaly agreed',
                },
                {
                  commenter: 'UnknownUser',
                  cDate: '24-03-2000',
                  cText: 'Far far away, behind the',
                },
                {
                  commenter: 'Mattew',
                  cDate: '23-03-2000',
                  cText: 'Some Think yea yea///',
                },
              ],
            },
          ],
        },
        


       
        


       
        



      ],
    };
  }
}
