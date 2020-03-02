
const ItemList = [];

class ProductTable extends React.Component {
    render() {

        const itemRows = this.props.items.map(item =>
            <ProductRow key={item.id} item={item} />
        );

        console.log(itemRows);

        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {itemRows}
                </tbody>
            </table>
        );
    }
}

class ProductAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.productAdd;
        var price = form.price.value;
        price = price.slice(1);
        const new_item = {
            category: form.category.value, price: price, productName: form.productName.value, image: form.image.value,
        }
        this.props.createItem(new_item);
        form.category.value = ""; form.price.value = "$"; form.productName.value = ""; form.image.value = "";
    }
    render() {
        return (
            <div>
                <form name="productAdd" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="column">
                            <label>Category <br />
                                <select id="category" name="category">
                                    <option value="Shirts">Shirts</option>
                                    <option value="Jeans">Jeans</option>
                                    <option value="Jackets">Jackets</option>
                                    <option value="Sweaters">Sweaters</option>
                                    <option value="Accessories">Accessories</option>
                                </select>
                            </label>
                        </div>
                        <div className="column">
                            <label>Price Per Unit  <br />
                                <input type="text" name="price" defaultValue="$" /></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label>Product Name  <br />
                                <input type="text" name="productName" /></label>
                        </div>
                        <div className="column">
                            <label>Image <br />
                                <input type="text" name="image" /></label>
                        </div>

                        <div className="row">
                            <input type="submit" id="addProduct" value="Add Product"></input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <tr>
                <td>{item.productName}</td>
                <td>{item.category}</td>
                <td>${item.price}</td>
                <td><a href={item.image} target="_blank">View</a></td>
            </tr>
        );
    }
}

class ProductList extends React.Component {
    constructor() {
        console.log('In constructor...');
        super();
        this.state = { items: [] };
        this.createItem = this.createItem.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
            const query = `query {
            productList {
                id
                productName
                price
                image
                category
                }
            }`;


        const response = await fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ query })
            });
        const result = await response.json();
        this.setState({ items: result.data.productList });
    }

    async createItem(item) {
        const query = `mutation {
            productAdd(issue:{
                productName: "${item.productName}",
                price: "${item.price}",
                category: "${item.category}",
                image: "${item.image}"
                }) {
                id
                }
                }`;
                const response = await fetch('/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ query })
                });

        this.loadData();

    }

    render() {
        return (
            <React.Fragment>
                <h1>My Company Inventory</h1>
                <h2>Showing all available products</h2>
                <hr />
                <ProductTable items={this.state.items} />
                <h2>Add a new product to inventory</h2>
                <hr />
                <ProductAdd createItem={this.createItem} />
            </React.Fragment>
        );
    }
} 
const element = <ProductList />;
ReactDOM.render(element, document.getElementById('content'));
