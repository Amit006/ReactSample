import React from "react";
import ReactDOM from "react-dom";

class MultipleSelectBox extends React.Component {
  state = {
    itemlist: [
      { label: "Two", id: "2", enabled: true },
      { label: "Three", id: "3", enabled: true },
      { label: "Four", id: "4", enabled: true }
    ],
    itemlist2: [],
    itemsToBeRemovedFromList1: [],
    itemsToBeRemovedFromList2: []
  };

  onChangeItemList1 = e => {
    const { itemlist, itemsToBeRemovedFromList1 } = this.state;
    const foundItem = itemlist.find(item => item.label == e.target.value);

    let allItems = [...itemsToBeRemovedFromList1, foundItem];

    //add item to the to be removed list
    this.setState({
      itemsToBeRemovedFromList1: [...allItems]
    });
  };

  onChangeItemList2 = e => {
    const { itemlist2, itemsToBeRemovedFromList2 } = this.state;
    const foundItem = itemlist2.find(item => item.label == e.target.value);

    //check for duplicates
    let allItems = [...itemsToBeRemovedFromList2, foundItem];

    //add item to the to be removed list
    this.setState({
      itemsToBeRemovedFromList2: [...allItems]
    });
  };

  handleadd = () => {
    const { itemlist, itemsToBeRemovedFromList1, itemlist2 } = this.state;
    const idsOfToBeRemovedItems = itemsToBeRemovedFromList1.map(
      item => item.id
    );
    const newItemList1 = itemlist.filter(
      item => !idsOfToBeRemovedItems.includes(item.id)
    );

    const newItemList2 = itemlist.filter(item =>
      idsOfToBeRemovedItems.includes(item.id)
    );

    this.setState({
      ...this.state,
      itemlist: newItemList1,
      itemlist2: [...itemlist2, ...newItemList2],
      itemsToBeRemovedFromList1: []
    });
  };

  handleremove = () => {
    const { itemlist, itemsToBeRemovedFromList2, itemlist2 } = this.state;
    const idsOfToBeRemovedItems = itemsToBeRemovedFromList2.map(
      item => item.id
    );
    const newItemList2 = itemlist2.filter(
      item => !idsOfToBeRemovedItems.includes(item.id)
    );

    const newItemList1 = itemlist2.filter(item =>
      idsOfToBeRemovedItems.includes(item.id)
    );

    this.setState({
      ...this.state,
      itemlist: [...itemlist, ...newItemList1],
      itemlist2: newItemList2,
      itemsToBeRemovedFromList2: []
    });
  };

  render() {
    const { itemlist, itemlist2 } = this.state;
    return (
      <div>
        <select
          className="custom-select"
          onChange={this.onChangeItemList1}
          multiple
        >
          {itemlist &&
            itemlist.map(item => (
              <option id={item.id} value={item.label}>
                {item.label}
              </option>
            ))}
        </select>

        <select
          className="custom-select"
          onChange={this.onChangeItemList2}
          multiple
        >
          {itemlist2 &&
            itemlist2.map(item => (
              <option id={item.id} value={item.label}>
                {item.label}
              </option>
            ))}
        </select>
        <div className="col-md-2 ">
          <button
            onClick={this.handleadd}
            class="btn btn-primary btn-block w-25 margin-bottom"
          >
            <i class="fa fa-arrow-right" />
            Add
          </button>
          <button
            onClick={this.handleremove}
            class="btn btn-primary btn-block w-25"
          >
            <i class="fa fa-arrow-left" />
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default MultipleSelectBox;