import requests
import sys
from datetime import datetime
import json

class GleamLEDAPITester:
    def __init__(self, base_url="https://complete-web-10.preview.emergentagent.com"):
        self.base_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, description=""):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        if description:
            print(f"   Description: {description}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            result = {
                'test_name': name,
                'endpoint': endpoint,
                'method': method,
                'expected_status': expected_status,
                'actual_status': response.status_code,
                'success': success,
                'response_data': None,
                'error': None
            }

            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    result['response_data'] = response.json()
                    if result['response_data']:
                        if isinstance(result['response_data'], list):
                            print(f"   Response: List with {len(result['response_data'])} items")
                        elif isinstance(result['response_data'], dict):
                            print(f"   Response: {list(result['response_data'].keys())}")
                except:
                    result['response_data'] = response.text
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    result['error'] = response.json()
                except:
                    result['error'] = response.text
                print(f"   Error: {result['error']}")

            self.test_results.append(result)
            return success, result['response_data'] if success else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            result = {
                'test_name': name,
                'endpoint': endpoint,
                'method': method,
                'expected_status': expected_status,
                'actual_status': None,
                'success': False,
                'response_data': None,
                'error': str(e)
            }
            self.test_results.append(result)
            return False, {}

    def test_root_endpoint(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET",
            "",
            200,
            description="Test if API is accessible"
        )

    def test_products_list(self):
        """Test products list endpoint"""
        return self.run_test(
            "Get Products List",
            "GET", 
            "products",
            200,
            description="Get all product categories"
        )

    def test_specific_categories(self):
        """Test specific product categories"""
        categories = ['transparent', 'indoor', 'outdoor']
        results = []
        
        for category in categories:
            success, data = self.run_test(
                f"Get {category.title()} Products",
                "GET",
                f"products/{category}",
                200,
                description=f"Get {category} category products"
            )
            results.append((category, success, data))
        
        return results

    def test_specific_product_series(self):
        """Test specific product series endpoints"""
        test_cases = [
            ('transparent', 'lucid', 'LUCID Series'),
            ('transparent', 'inv', 'INV Series'),
            ('indoor', 'wp', 'WP Series'),
            ('outdoor', 'ap', 'AP Series')
        ]
        
        results = []
        for category, series, name in test_cases:
            success, data = self.run_test(
                f"Get {name}",
                "GET",
                f"products/{category}/{series}",
                200,
                description=f"Get {name} details"
            )
            results.append((category, series, success, data))
        
        return results

    def test_use_cases(self):
        """Test use cases endpoints"""
        # Test list endpoint
        success1, data1 = self.run_test(
            "Get Use Cases List",
            "GET",
            "use-cases",
            200,
            description="Get all use cases"
        )
        
        # Test specific use case
        success2, data2 = self.run_test(
            "Get Storefront Use Case",
            "GET",
            "use-cases/storefront",
            200,
            description="Get specific use case details"
        )
        
        return [(success1, data1), (success2, data2)]

    def test_contact_submission(self):
        """Test contact form submission"""
        test_inquiry = {
            "company_name": "Test Company API",
            "email": "test@company.com",
            "phone": "+91 9876543210",
            "product_interest": "Transparent LED Display",
            "requirement": "Looking for a 10x8 feet transparent LED display for our storefront in Mumbai. Need brightness suitable for daytime viewing."
        }
        
        return self.run_test(
            "Submit Contact Form",
            "POST",
            "contact",
            200,
            data=test_inquiry,
            description="Test contact form submission to MongoDB"
        )

    def test_invalid_endpoints(self):
        """Test error handling for invalid endpoints"""
        results = []
        
        # Test invalid product category
        success1, _ = self.run_test(
            "Invalid Product Category",
            "GET",
            "products/invalid",
            404,
            description="Test 404 for invalid category"
        )
        results.append(success1)
        
        # Test invalid product series
        success2, _ = self.run_test(
            "Invalid Product Series",
            "GET",
            "products/transparent/invalid",
            404,
            description="Test 404 for invalid series"
        )
        results.append(success2)
        
        # Test invalid use case
        success3, _ = self.run_test(
            "Invalid Use Case",
            "GET",
            "use-cases/invalid",
            404,
            description="Test 404 for invalid use case"
        )
        results.append(success3)
        
        return results

def main():
    print("🚀 Starting Gleam LED API Testing...")
    print("=" * 60)
    
    tester = GleamLEDAPITester()
    
    # Test basic connectivity
    print("\n📡 Testing Basic Connectivity...")
    tester.test_root_endpoint()
    
    # Test products endpoints
    print("\n📦 Testing Product Endpoints...")
    tester.test_products_list()
    tester.test_specific_categories()
    tester.test_specific_product_series()
    
    # Test use cases
    print("\n🎯 Testing Use Cases Endpoints...")
    tester.test_use_cases()
    
    # Test contact form
    print("\n📨 Testing Contact Form...")
    tester.test_contact_submission()
    
    # Test error handling
    print("\n❌ Testing Error Handling...")
    tester.test_invalid_endpoints()
    
    # Print summary
    print("\n" + "=" * 60)
    print(f"📊 Test Summary:")
    print(f"   Total Tests: {tester.tests_run}")
    print(f"   Passed: {tester.tests_passed}")
    print(f"   Failed: {tester.tests_run - tester.tests_passed}")
    print(f"   Success Rate: {(tester.tests_passed/tester.tests_run*100):.1f}%")
    
    # Save detailed results
    with open('/app/test_reports/backend_test_results.json', 'w') as f:
        json.dump({
            'summary': {
                'total_tests': tester.tests_run,
                'passed': tester.tests_passed,
                'failed': tester.tests_run - tester.tests_passed,
                'success_rate': round(tester.tests_passed/tester.tests_run*100, 1)
            },
            'test_results': tester.test_results,
            'timestamp': datetime.now().isoformat()
        }, f, indent=2)
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())