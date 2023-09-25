# Define a function for linear search of a product
def linear_search_product(product_list, target_product):
    # Initialize an empty list to store indices
    indices = []

    # Iterate through the list of products
    for index, product in enumerate(product_list):
        # Check if the current product matches the target product
        if product == target_product:
            # If a match is found, append the index to the list of indices
            indices.append(index)

    # Return the list of indices (empty list if not found)
    return indices

# Sample list of products
products = ["Apple", "Banana", "Orange", "Apple", "Grapes", "Apple"]

# Target product to search for
target_product = "Apple"

# Perform a linear search for the target product
result = linear_search_product(products, target_product)

# Display the result
if result:
    print(f"The product '{target_product}' was found at indices: {result}")
else:
    print(f"The product '{target_product}' was not found in the list.")