Selected Category not showing in offer page while editing offer
sales report download issue
wishlist loaders
wishlist remove still showing
---------------------------------------------------------------------------------------------------------------
MAKE ALL PAGE RESPONSIVE
BLOCKED USER GET OUT
COUPON REACTIVATION
CSRF 
INVOICE VALUE
SALESREPORT VALUE
RATINGS AND REVIEW
CHAT
LOCATION
INACTIVE BUTTONS SHOULD BE REMOVED
EXPRESS RATE LIMITER

------------------------------------------------------------------------------------------------------- 





Pending
-remove cartId from order schema
-save address as string or object in order schema instead of objectId
-do not save price in cart schema
-edit product with image
-crop image

Provide the option to download the invoice for each order.(pdf)
Implement search to find specific order

Admin side :
If the verification is accepted ,then return the previously paid amount by the consumer or user to the wallet.
Implement Pagination


------------------------------------------------------------------------------------------------------------------------------------------
Repeat Pendings...

<!-- issue in update product -->
<!-- implement backend pagination in product -->
<!-- issue in coupon validation -->
<!-- implement backend pagination in coupon -->
<!-- implement backend pagination in offer -->
<!-- Issue in payment gateway integration -->
<!-- cancel order need refund -->
<!-- wallet need pagination -->
<!-- keep same currency throught application -->
<!-- order listing need pagination -->
never call api from component
create sevice or custom hook
use axios interceptor
need to under stand reusable component
proper naming convention needed
move to status code 
coding test failed
 
Mandatory code test needed


------------------------------------------------------------------------------------------------------------------------------------------



WEEK 4

User side :
Integrate online payment method(Razorpay or Paypal). The integration of multiple payment gateways will be an add-on..
After a successful payment, redirect the user to the order success page. The page should contain a thank-you or success statement, an illustration, and buttons to redirect the user to the order details page and the continue shopping page
After a payment failure, redirect the user to the order transaction failure or order failure page. The page should contain an illustration, a statement, a button to retry the payment, and a button to redirect to the order details page.Once the order is successfully placed, redirect the user to the successful page.
Provide an option to cancel the entire order or specific products. Upon cancellation, ensure that the stock of the respective products is incremented in the inventory.
when canceling an order should ask for reason(optional) .
Provide an option to return order when the order is delivered,should ask for reason for return (mandatory).
Coupon Management (Apply Coupon, Remove Coupon) 
Implement an option to apply and remove a coupon on the checkout page. Ensure that a coupon cannot be applied multiple times and that the breakdown of the grand total price, including the coupon discount, is properly displayed on the checkout page.
Search, Category filtering
Wishlist (Add, Remove)
Implement add to wishlist and remove from wishlist.
When a product is moved to cart from wishlist ,ensure that the product is not present in wishlist anymore.
Add to wishlist buttons should be present both on product listing pages and product detail page.
Wallet Management
Implement a wallet system for canceled and returned orders.
In case of a return, refund the paid amount to the user's wallet only after confirmation from the admin.
In case of canceled orders, refund the amount directly.

Admin side : 
Offer module(Product offer, Category offer, Referral offer).
Implement Product offer
This offer can be only applied to specific products
Implement Category offer 
This offer can be applied to a specific category.
Note:
Handle cases where both category and product offers are available for a product. 
  Apply the largest offer to the specific product.

Example:
If a shirt has a 20% product offer and a 30% category offer, consider only the 
greater offer—in this case, the category offer.
Referral offer
This offer is like a reward to the user for inviting other users to your ecommerce platform.
This can be done in two approaches:
Using a token url
The existing user can invite a new user by sharing a link that contains a token.
Once the new user registers using this link, provide a unique coupon to the existing user.
Using referral code
The existing user can share a unique referral code, which should be generated during the creation of the account and remain consistent.
Add a new field to the registration page (optional) for new users to manually enter the referral code, accommodating non-referred users.
Once the new user registers, provide a unique coupon to the existing user.

Coupon Management (Create, Delete)
Implement functionality to create new coupon with proper validations.
Sales report(Daily, Weekly, Yearly, Custom date)
Generate sales report 
Should be able to filter based on  
Custom date range 
1 Day / week / month 
Show discount and coupons deduction in sales report 
Overall sales count  
Overall order amount 
Overall discount

Report download (Pdf, Excel)
Ensure that the sales report download adheres to the selected filters.






