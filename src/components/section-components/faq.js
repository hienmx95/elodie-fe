import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Faq extends Component {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="faq-content margin-top-65">
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-lg-8">
		        <div className="accordion-area">
		          <h4 className="text-center">Questions and Answers</h4>
		          <div className="accordion-style" id="accordionExample1">
		            <div className="card">
		              <div className="card-header" id="headingOne">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">PHƯƠNG THỨC THANH TOÁN</a>
		                </p>
		              </div>
		              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample1">
		                <div className="card-body">
							<p>Khách hàng có thể tham khảo các phương thức thanh toán sau và lựa chọn áp dụng phương thức phù hợp:</p>
							<p><strong>Cách 1:</strong> Thanh toán trực tiếp (người mua nhận hàng tại địa chỉ người bán)</p>
							<p><strong>Cách 2:</strong> Thanh toán sau (COD – giao hàng và thu tiền tận nơi)</p>
							<p><strong>Cách 3:</strong> Thanh toán online, chuyển khoản qua số tài khoản:</p>
							<p><strong>1017114683 - Vietcombank (Thành Công - PGD Duy Tân) - TRINH THUY LINH</strong></p>
		                </div>
		              </div>
		            </div>
		            <div className="card">
		              <div className="card-header" id="headingTwo">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">CHÍNH SÁCH ĐỔI SẢN PHẨM</a>
		                </p>
		              </div>
		              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample1">
		                <div className="card-body">
		                  <p>Với mong muốn mang lại sự trải nghiệm tốt nhất cho khách hàng, Élodie gửi bạn chính sách đổi sản phẩm như sau:</p>
						  <p><strong>1. Điều kiện đổi sản phẩm</strong></p>
						  <p>• Sản phẩm không đúng mẫu mã, mùi hương trong đơn hàng đã đặt </p>
						  <p>• Không đủ số lượng trong đơn hàng</p>
						  <p>• Tình trạng hũ bị bong tróc, bể vỡ…trong quá trình vận chuyển</p>
						  <p>• Không áp dụng chính sách này với các sản phẩm khuyến mãi. </p>
						  <p>Khách hàng vui lòng kèm gửi hình ảnh/video về tình trạng sản phẩm sau khi nhận hàng để được hỗ trợ đổi sản phẩm. </p>
						  <p><strong>2. Quy định về thời gian gửi sản phẩm đổi trả</strong></p>
						  <p>• Thời gian thông báo đổi trả: Trong vòng 48h kể từ khi nhận sản phẩm bị lỗi.</p>
						  <p>• Thời gian khách hàng nhận được sản phẩm mới: Tối đa trong vòng 07 ngày kể từ khi chuyển hoàn sản phẩm bị lỗi.</p>
						  <p>• Địa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của Élodie hoặc chuyển qua đường bưu điện.</p>
		                </div>
		              </div>
		            </div>
		            <div className="card">
		              <div className="card-header" id="headingThree">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">CHÍNH SÁCH VẬN CHUYỂN</a>
		                </p>
		              </div>
		              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample1">
		                <div className="card-body">
							<p><strong>• Chuyển hàng LIÊN TỈNH:</strong> Sản phẩm sẽ được chuyển qua đơn vị:  GiaoHangTietKiem.</p>
							<p><strong>• Đơn hàng tại Hà Nội:</strong> Sản phẩm sẽ được vận chuyển qua các đơn vị giao hàng nhanh, đảm bảo theo thời gian phù hợp với khách nhận.</p>
							<p><strong>Lưu ý: </strong></p>
							<p><strong>Thời gian vận chuyển:</strong> Đơn hàng sẽ được xử lý và vận chuyển từ 1 - 5 ngày làm việc. Thời gian vận chuyển thực tế có thể bị ảnh hưởng bởi điều kiện thời tiết, dịch bệnh, ngày lễ,.. </p>
							<p><strong>Chi phí vận chuyển:</strong> Có thể thay đổi tùy thuộc vào số lượng đặt hàng và biểu giá của đơn vị vận chuyển.</p>
		                </div>
		              </div>
		            </div>
		            <div className="card">
		              <div className="card-header" id="headingFour">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">HỖ TRỢ KHÁCH HÀNG</a>
		                </p>
		              </div>
		              <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample1">
		                <div className="card-body">
		                  <p>Trong trường hợp Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, hãy liên hệ ngay với chúng mình nhé!</p>
						  <p>Đường dây chăm sóc khách hàng: <strong>0986279928 - 0969781710</strong></p>
						  <a href="#">Facebook | </a>
						  <a href="#">Instagram </a>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
        }
}

export default Faq