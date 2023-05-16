import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header, Loading, ModalSuccess } from './components/atoms'
import { Footer, ItemListProducts, Sorting } from './components/molecules';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [sortingValue, setSortingValue] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [products]);

  useEffect(() => {
    setSortingValue('');
    setProducts([]);
  }, [])


  const calculateTotalPrice = () => {
    let sum = 0;
    let totalProducts = 0;
    products.forEach((product) => {
      sum += product.price * product.count;
      totalProducts += product.count;
    });
    setTotalPrice(sum);
    setTotalProducts(totalProducts)
  };


  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products.map((product) => ({
        ...product,
        count: 0,
      })));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false)
      console.log("error : ", error);
    }
  }

  const getSortingValue = (sort) => {
    setSortingValue(sort);
  }


  const buttonDecrement = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count > 0 ? product.count - 1 : 0,
          };
        }
        return product;
      })
    );
  }

  const buttonIncrement = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count < product.stock ? product.count + 1 : product.count,
          };
        }
        return product;
      })
    );
  }

  const renderProduct = () => {
    console.log("sort : ", sortingValue);
    if (sortingValue == 'high') {
      return products.sort((a, b) => b.price - a.price).map((products) => {
        return <ItemListProducts
          key={products.id}
          label={products.title}
          price={products.price}
          count={products.count}
          handleDecrement={() => buttonDecrement(products.id)}
          handleIncrement={() => buttonIncrement(products.id)}
        />
      })
    }
    if (sortingValue == 'lowest') {
      return products.sort((a, b) => a.price - b.price).map((products) => {
        return <ItemListProducts
          key={products.id}
          label={products.title}
          price={products.price}
          count={products.count}
          handleDecrement={() => buttonDecrement(products.id)}
          handleIncrement={() => buttonIncrement(products.id)}
        />
      })
    }
    if (sortingValue == 'name') {
      return products.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      }).map((products) => {
        return <ItemListProducts
          key={products.id}
          label={products.title}
          price={products.price}
          count={products.count}
          handleDecrement={() => buttonDecrement(products.id)}
          handleIncrement={() => buttonIncrement(products.id)}
        />
      })
    }
    return products.map((products) => {
      return <ItemListProducts
        key={products.id}
        label={products.title}
        price={products.price}
        count={products.count}
        handleDecrement={() => buttonDecrement(products.id)}
        handleIncrement={() => buttonIncrement(products.id)}
      />
    })
  }

  const closeModal = () => {
    setVisibility(false);
    setSortingValue('');
    setProducts([]);
    fetchData();
  }

  const pressSubmit = () => {
    setVisibility(true);
  }

  const pressReset = () => {
    setSortingValue('');
    setProducts([]);
    fetchData();
  }

  return (
    <View style={{ flex: 1 }}>
      <Header isLoading={isLoading} totalProduct={products.length} />
      {
        isLoading
          ?
          <Loading />
          :
          <>
            <View style={{ flex: 1 }}>
              <View style={{ height: 41 }} />
              <View style={{ marginTop: 50, paddingHorizontal: 20, paddingVertical: 30 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  {renderProduct()}
                </ScrollView>
              </View>
              <View style={styles.sorting}>
                <Sorting onChangeValue={(sorting) => getSortingValue(sorting)} />
              </View>
            </View>
            <Footer
              total={totalPrice}
              onPressSubmit={pressSubmit}
              onPressReset={pressReset}
            />
          </>
      }
      <ModalSuccess
        visibility={visibility}
        sumProducts={totalProducts}
        totalPrice={totalPrice}
        onPress={closeModal}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  sorting: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    zIndex: 1,
  }
})