{
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === false) {
            return input.toLowerCase();
        }
        return input.toUpperCase();
        }; 

    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]
        {
            return items.filter(item => 
                item.rating >= 4
            );
    };


    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return arrays.flat();
    };

    class Vehicle {
        constructor(private make: string, private year: number) {};

        getInfo (): string {
            return `Make: ${this.make}, Year: ${this.year}`;
        };
    };

    class Car extends Vehicle {
        constructor(make: string, year: number, private model: string) {
        super(make, year);   
    };
    getModel (): string {
        return  `Model: ${this.model}`;
    }
};

    function processValue(value: string | number): number {
        if (typeof value === "string") {
            return value.length;
        } else {
           return value * 2;
        };
    };

    interface Product {
        name: string;
        price: number;
    };

    function getMostExpensiveProduct(products: Product[]): Product | null
    {
        if (products.length === 0) {
            return null;
        }
        return products.reduce((max, product) => 
            product.price > max.price ? product : max
    ); 
};

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    };
    
    function getDayType(day: Day): string {
        const weekend = new Set<Day>(
            [Day.Saturday, Day.Sunday]
        );
        return weekend.has(day) ? "Weekend" : "Weekday";
    };
    
    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Negative number not allowed"));
                } else {
                    resolve(n * n);
                }
            }, 1000); 
        });
    };
    

}