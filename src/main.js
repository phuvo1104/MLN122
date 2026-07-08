import './style.css'

document.querySelector('#app').innerHTML = `
<!-- Navigation -->
<nav class="nav-container">
  <a href="#hero" class="nav-item active" data-sec="hero">Trang chủ</a>
  <a href="#intro" class="nav-item" data-sec="intro">1. Mở đầu</a>
  <a href="#theory" class="nav-item" data-sec="theory">2. Lý luận</a>
  <a href="#practice" class="nav-item" data-sec="practice">3. Thực tiễn</a>
  <a href="#evaluation" class="nav-item" data-sec="evaluation">4. Đánh giá</a>
  <a href="#conclusion" class="nav-item" data-sec="conclusion">5. Kết luận</a>
</nav>

<!-- Hero Section -->
<section id="hero" class="hero-sec">
  <div class="container hero-content">
    <div class="hero-badge reveal">Nghiên cứu Kinh tế chính trị</div>
    <h1 class="reveal">
      <span class="gradient-text-gold">ĐỘC QUYỀN FIFA</span><br>
      <span class="gradient-text-red">DƯỚI LĂNG KÍNH MÁC - LÊNIN</span>
    </h1>
    <p class="hero-subtitle reveal">
      Phân tích sâu sắc bản chất kinh tế, quyền lực tuyệt đối, các mâu thuẫn biện chứng và xu hướng tích tụ tư bản của Liên đoàn Bóng đá Quốc tế (FIFA).
    </p>
    <a href="#intro" class="btn-primary reveal">
      Bắt đầu khám phá
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </a>
  </div>
</section>

<!-- 1. Mở đầu -->
<section id="intro">
  <div class="container grid-2col">
    <div class="reveal">
      <h2 class="gradient-text-red">1. Mở đầu</h2>
      <p>
        Liên đoàn Bóng đá Quốc tế (FIFA) hiện là tổ chức quản lý thể thao lớn nhất thế giới, chi phối toàn bộ các hoạt động liên quan đến môn thể thao vua trên phạm vi toàn cầu. Với hàng tỷ người hâm mộ và khối lượng tài sản khổng lồ luân chuyển mỗi năm, bóng đá không chỉ là một môn thể thao mà đã trở thành một ngành công nghiệp tỷ đô.
      </p>
      
      <div class="highlight-box">
        <p>
          "Sự bành trướng này đặt ra một câu hỏi lớn dưới góc độ Kinh tế chính trị: FIFA có đang nắm giữ vị thế độc quyền tuyệt đối không? Và sự tập trung quyền lực này ảnh hưởng như thế nào đến nền kinh tế bóng đá toàn cầu?"
        </p>
      </div>
      
      <p>
        Phân tích bộ máy của FIFA qua lăng kính <strong>Kinh tế chính trị Mác - Lênin</strong> sẽ giúp làm rõ bản chất kinh tế, những ưu điểm và cả những mâu thuẫn nội tại của tổ chức bóng đá khổng lồ này.
      </p>
    </div>
    
    <div class="reveal">
      <div class="image-wrapper image-glow-red">
        <img src="./images/fifa_empire.png" alt="FIFA Empire Illustration">
      </div>
    </div>
  </div>
</section>

<!-- 2. Cơ sở lý luận -->
<section id="theory" style="background: rgba(255, 255, 255, 0.01);">
  <div class="container">
    <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem auto;" class="reveal">
      <h2 class="gradient-text-red">2. Lý luận Độc quyền trong Kinh tế chính trị Mác - Lênin</h2>
      <p>
        Để hiểu rõ cách thức FIFA vận hành và chi phối thế giới bóng đá, trước tiên chúng ta cần nắm vững các khái niệm nền tảng về độc quyền được V.I. Lênin đúc kết.
      </p>
    </div>
    
    <div class="grid-2col" style="margin-bottom: 4rem;">
      <div class="reveal">
        <div class="image-wrapper image-glow-gold">
          <img src="./images/capital_accumulation.png" alt="Capital Accumulation Concept">
        </div>
      </div>
      
      <div class="reveal">
        <p>
          Lý thuyết Mác - Lênin chỉ ra rằng cạnh tranh tự do tất yếu dẫn đến tích tụ và tập trung sản xuất. Khi quy mô sản xuất vượt trội, các doanh nghiệp lớn liên minh lại để kiểm soát thị trường, hình thành các tổ chức độc quyền nhằm thu <strong>lợi nhuận độc quyền cao</strong>.
        </p>
        <p>
          Các tổ chức này không chỉ thống lĩnh thị trường nội địa mà còn phân chia thị trường thế giới, tạo nên mạng lưới vòi bạch tuộc chi phối cả kinh tế lẫn các chính sách xã hội.
        </p>
        <div class="barrier-box">
          <h4>Vòi bạch tuộc toàn cầu</h4>
          <p style="margin: 0; font-size: 0.95rem;">
            Theo Lênin, các liên minh độc quyền tư bản chia nhau thị trường thế giới. Trong bóng đá, FIFA phân mảnh bản quyền và quyền lực thông qua các liên đoàn châu lục (UEFA, AFC, CONMEBOL...) để kiểm soát 100% dòng tiền bóng đá toàn cầu.
          </p>
        </div>
      </div>
    </div>

    <div style="text-align: center; margin-bottom: 1.5rem;" class="reveal">
      <h3 style="font-size: 1.5rem; color: var(--accent-gold);">Click vào các thẻ dưới đây để khám phá chi tiết luận điểm lý luận:</h3>
    </div>
    
    <div class="theory-cards reveal">
      <!-- Card 1 -->
      <div class="flip-card" onclick="this.classList.toggle('flipped')">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="card-num">01</div>
            <h3>Khái niệm độc quyền</h3>
            <div class="card-hint">
              <span>Xem lý luận</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
            </div>
          </div>
          <div class="flip-card-back">
            <h3 style="color: var(--accent-red); margin-bottom: 0.8rem;">Định nghĩa của Lênin</h3>
            <p style="font-size: 0.95rem; line-height: 1.6;">
              Độc quyền là sự liên minh giữa các doanh nghiệp lớn, nắm trong tay phần lớn việc sản xuất và tiêu dùng một số loại hàng hóa, có khả năng định ra giá cả độc quyền nhằm thu lợi nhuận độc quyền cao.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Card 2 -->
      <div class="flip-card" onclick="this.classList.toggle('flipped')">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="card-num">02</div>
            <h3>Nguyên nhân hình thành</h3>
            <div class="card-hint">
              <span>Xem lý luận</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
            </div>
          </div>
          <div class="flip-card-back">
            <h3 style="color: var(--accent-red); margin-bottom: 0.8rem;">Quy luật Tích tụ</h3>
            <p style="font-size: 0.95rem; line-height: 1.6;">
              Xuất phát từ quy luật giá trị và cạnh tranh tự do. Cạnh tranh gay gắt dẫn đến tích tụ và tập trung sản xuất. Doanh nghiệp nhỏ bị đào thải, doanh nghiệp lớn sáp nhập lại để tránh rủi ro và tối đa hóa lợi nhuận.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Card 3 -->
      <div class="flip-card" onclick="this.classList.toggle('flipped')">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="card-num">03</div>
            <h3>Đặc điểm thống trị</h3>
            <div class="card-hint">
              <span>Xem lý luận</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
            </div>
          </div>
          <div class="flip-card-back">
            <h3 style="color: var(--accent-red); margin-bottom: 0.8rem;">Rào cản gia nhập</h3>
            <p style="font-size: 0.95rem; line-height: 1.6;">
              Nắm giữ thị phần áp đảo, thiết lập rào cản gia nhập ngành (barrier to entry) cực cao để ngăn chặn đối thủ mới, đồng thời áp đặt "luật chơi" đối với các đối tác, nhà cung cấp và người tiêu dùng.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Card 4 -->
      <div class="flip-card" onclick="this.classList.toggle('flipped')">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="card-num">04</div>
            <h3>Biểu hiện độc quyền</h3>
            <div class="card-hint">
              <span>Xem lý luận</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
            </div>
          </div>
          <div class="flip-card-back">
            <h3 style="color: var(--accent-red); margin-bottom: 0.8rem;">Chi phối toàn cầu</h3>
            <p style="font-size: 0.95rem; line-height: 1.6;">
              Sự phân chia thị trường thế giới giữa các tập đoàn lớn. Các tổ chức vươn vòi ra toàn cầu, kiểm soát không chỉ kinh tế mà còn ảnh hưởng sâu rộng đến các quyết sách chính trị, xã hội của các quốc gia.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 3. Thực tiễn vị thế độc quyền của FIFA -->
<section id="practice">
  <div class="container">
    <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem auto;" class="reveal">
      <h2 class="gradient-text-gold">3. Thực tiễn vị thế độc quyền của FIFA</h2>
      <p>
        Mặc dù đăng ký dưới danh nghĩa một tổ chức phi lợi nhuận tại Thụy Sĩ, cách thức FIFA vận hành nền kinh tế bóng đá toàn cầu mang đậm bóng dáng của một siêu tập đoàn độc quyền xuyên quốc gia.
      </p>
    </div>
    
    <div class="rev-dashboard reveal">
      <!-- Left side: Interactive List of Revenue Streams -->
      <div class="rev-streams">
        <div class="rev-item active" data-stream="tv">
          <div class="rev-header">
            <div class="rev-title-group">
              <div class="rev-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="15" rx="2.18" ry="2.18"/><line x1="12" y1="17" x2="12" y2="22"/><line x1="17" y1="22" x2="7" y2="22"/></svg>
              </div>
              <span class="rev-name">Bản quyền truyền hình</span>
            </div>
            <span class="rev-percentage">49%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: 49%"></div>
          </div>
        </div>
        
        <div class="rev-item" data-stream="marketing">
          <div class="rev-header">
            <div class="rev-title-group">
              <div class="rev-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <span class="rev-name">Tài trợ & Tiếp thị</span>
            </div>
            <span class="rev-percentage">29%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: 29%"></div>
          </div>
        </div>
        
        <div class="rev-item" data-stream="licensing">
          <div class="rev-header">
            <div class="rev-title-group">
              <div class="rev-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
              </div>
              <span class="rev-name">Cấp phép thương hiệu</span>
            </div>
            <span class="rev-percentage">15%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: 15%"></div>
          </div>
        </div>
        
        <div class="rev-item" data-stream="tickets">
          <div class="rev-header">
            <div class="rev-title-group">
              <div class="rev-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="16" y1="2" x2="16" y2="4"/><line x1="8" y1="2" x2="8" y2="4"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <span class="rev-name">Vé & Dịch vụ lưu trú</span>
            </div>
            <span class="rev-percentage">7%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: 7%"></div>
          </div>
        </div>
      </div>
      
      <!-- Right side: Description Detail & Image Card -->
      <div class="glass-card card-gold rev-details-card">
        <div>
          <div class="rev-detail-header">
            <h3 id="detail-title" style="color: var(--accent-gold); font-size: 1.5rem;">Bản quyền truyền hình</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0.2rem 0 0 0;">Nguồn thu độc quyền cốt lõi của FIFA</p>
          </div>
          <p id="detail-desc" class="rev-desc-text">
            Bản quyền truyền hình là nguồn thu lớn nhất của FIFA. Các đài truyền hình trên khắp thế giới buộc phải tham gia vào các cuộc đấu thầu cạnh tranh gay gắt, chi trả những khoản tiền khổng lồ để giành quyền phát sóng trực tiếp giải vô địch bóng đá thế giới World Cup. Đây là minh chứng rõ nét cho khả năng áp đặt giá cả độc quyền nhờ nắm giữ mặt hàng độc nhất vô nhị.
          </p>
        </div>
        
        <div class="image-wrapper image-glow-gold" style="margin-top: 1.5rem; aspect-ratio: 16 / 8;">
          <img id="detail-img" src="./images/fifa_revenue.png" alt="FIFA Revenue Concept">
        </div>
      </div>
    </div>

    <!-- Quyền lực tuyệt đối & Rào cản -->
    <div class="grid-2col" style="margin-top: 5rem;">
      <div class="reveal">
        <h3 style="font-size: 1.8rem; color: var(--text-primary); margin-bottom: 1.5rem;">Đế chế quyền lực phi biên giới</h3>
        <p>
          FIFA sở hữu một hệ thống quyền lực tuyệt đối mà không một doanh nghiệp tư bản thông thường nào có được:
        </p>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
          <li style="display: flex; gap: 0.8rem; align-items: start;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--accent-gold); flex-shrink:0; margin-top:0.2rem;"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>Quy mô khổng lồ:</strong> Quản lý trực tiếp 211 liên đoàn bóng đá quốc gia, lớn hơn cả số lượng thành viên chính thức của Liên Hợp Quốc (193 quốc gia).</span>
          </li>
          <li style="display: flex; gap: 0.8rem; align-items: start;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--accent-gold); flex-shrink:0; margin-top:0.2rem;"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>Luật pháp riêng biệt:</strong> Ban hành quy định chuyển nhượng, kỷ luật, quản lý trọng tài trên toàn cầu, có quyền cấm thi đấu đối với các quốc gia can thiệp sâu vào bóng đá.</span>
          </li>
          <li style="display: flex; gap: 0.8rem; align-items: start;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--accent-gold); flex-shrink:0; margin-top:0.2rem;"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>Độc quyền giải đấu lõi:</strong> Sở hữu giải World Cup – sự kiện thể thao có giá trị thương mại lớn nhất hành tinh mà không sản phẩm nào thay thế được.</span>
          </li>
        </ul>
      </div>
      
      <div class="reveal">
        <div class="barrier-box" style="background: rgba(255, 184, 0, 0.02); border-color: rgba(255,184,0,0.15); padding: 2rem;">
          <h3 style="color: var(--accent-gold); font-size: 1.4rem; margin-bottom: 1rem;">Rào cản gia nhập ngành tuyệt đối</h3>
          <p style="font-size: 0.95rem; color: var(--text-secondary);">
            Bất kỳ tổ chức nào muốn tạo ra một giải đấu cạnh tranh trực tiếp đều vấp phải những rào cản không thể vượt qua:
          </p>
          <p style="font-size: 0.95rem; color: var(--text-secondary); border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem; margin-top: 1rem;">
            1. <strong>Tính kế thừa lịch sử:</strong> World Cup đã tích tụ danh tiếng và giá trị văn hóa hơn 90 năm, biến nó thành một biểu tượng tinh thần độc quyền.
          </p>
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin: 0.5rem 0 0 0;">
            2. <strong>Quy mô mạng lưới (Network Effect):</strong> Tất cả các liên đoàn lớn, các cầu thủ hàng đầu thế giới đều đang nằm trong guồng quay của hệ thống FIFA. Bất cứ ai rời đi sẽ lập tức bị cô lập và loại bỏ.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 4. Đánh giá theo quan điểm Mác - Lênin -->
<section id="evaluation">
  <div class="container">
    <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem auto;" class="reveal">
      <h2 class="gradient-text-red">4. Đánh giá FIFA theo quan điểm Mác - Lênin</h2>
      <p>
        Sự tập trung nguồn lực và quyền lực tuyệt đối của một tổ chức độc quyền như FIFA mang lại cả những bước tiến lớn về lực lượng sản xuất lẫn những mâu thuẫn giai cấp và kinh tế sâu sắc.
      </p>
    </div>
    
    <div class="evaluation-tabs-container reveal">
      <!-- Tabs header -->
      <div class="tab-buttons">
        <button class="tab-btn active btn-pros" data-tab="pros">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          Ưu điểm (Tính xã hội hóa)
        </button>
        <button class="tab-btn btn-cons" data-tab="cons">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          Hạn chế (Mâu thuẫn độc quyền)
        </button>
      </div>
      
      <!-- Tab content: Pros -->
      <div class="tab-content active" id="tab-pros">
        <div class="eval-grid">
          <div class="list-interactive">
            <div class="list-item pros-item expanded">
              <span class="tag-badge tag-pros">Lực lượng sản xuất</span>
              <div class="list-item-title">Thống nhất và tiêu chuẩn hóa thị trường toàn cầu</div>
              <div class="list-item-content">
                Nhờ vị thế độc quyền quản lý, FIFA đã tiêu chuẩn hóa toàn bộ luật chơi, kích thước sân bãi, công nghệ áp dụng (như VAR, công nghệ đường biên Goal-line) trên toàn cầu. Điều này giúp tạo ra một thị trường bóng đá thông suốt, giảm thiểu xung đột quy tắc và thúc đẩy lực lượng sản xuất phát triển mạnh mẽ.
              </div>
            </div>
            
            <div class="list-item pros-item">
              <span class="tag-badge tag-pros">Tập trung tư bản</span>
              <div class="list-item-title">Hiệu quả tổ chức các giải đấu quy mô khổng lồ</div>
              <div class="list-item-content">
                Sự tích tụ nguồn vốn khổng lồ giúp FIFA có đủ năng lực tài chính và quản trị để tổ chức những ngày hội thể thao siêu lớn như World Cup. Nó thúc đẩy trực tiếp các quốc gia đăng cai cải tạo hạ tầng giao thông, công nghệ truyền thông và xây dựng các siêu sân vận động hiện đại bậc nhất.
              </div>
            </div>
            
            <div class="list-item pros-item">
              <span class="tag-badge tag-pros">Xã hội hóa sản xuất</span>
              <div class="list-item-title">Tái phân phối tài sản cho các nền bóng đá trẻ</div>
              <div class="list-item-content">
                FIFA sử dụng một phần doanh thu khổng lồ của mình để tài trợ ngược lại cho các quốc gia đang phát triển thông qua chương trình FIFA Forward. Khoản tiền này giúp xây dựng sân cỏ nhân tạo, cơ sở đào tạo trẻ và tổ chức các giải đấu phong trào tại châu Phi, châu Á. Điều này thể hiện một khía cạnh tích cực của tính xã hội hóa sản xuất trong lý thuyết Mác.
              </div>
            </div>
          </div>
          
          <div class="image-wrapper image-glow-gold">
            <img src="./images/fifa_revenue.png" alt="FIFA Production Socialization">
          </div>
        </div>
      </div>
      
      <!-- Tab content: Cons -->
      <div class="tab-content" id="tab-cons">
        <div class="eval-grid">
          <div class="image-wrapper image-glow-red">
            <img src="./images/fifa_conflict.png" alt="FIFA Contradiction and Conflict">
          </div>
          
          <div class="list-interactive">
            <div class="list-item cons-item expanded">
              <span class="tag-badge tag-cons">Bóc lột giá trị thặng dư</span>
              <div class="list-item-title">Chiếm đoạt thặng dư của câu lạc bộ & cầu thủ</div>
              <div class="list-item-content">
                Người lao động trực tiếp tạo ra giá trị thặng dư là các cầu thủ và câu lạc bộ (CLB). Tuy nhiên, FIFA lại nắm giữ phần lớn lợi nhuận từ bản quyền, quảng cáo. Các CLB buộc phải nhả người cho ĐTQG thi đấu chịu rủi ro chấn thương nặng (được gọi là "virus FIFA") mà chỉ nhận lại khoản bồi thường cực nhỏ từ FIFA.
              </div>
            </div>
            
            <div class="list-item cons-item">
              <span class="tag-badge tag-cons">Cản trở tự do cạnh tranh</span>
              <div class="list-item-title">Đàn áp các giải đấu ly khai (European Super League)</div>
              <div class="list-item-content">
                FIFA và các liên đoàn châu lục liên kết chặt chẽ để bóp chết mọi ý tưởng cạnh tranh. Khi các CLB lớn muốn lập giải European Super League độc lập, FIFA lập tức đe dọa trừng phạt, cấm các câu lạc bộ này và cấm cầu thủ thi đấu World Cup nhằm duy trì vị thế độc quyền thống trị tuyệt đối.
              </div>
            </div>
            
            <div class="list-item cons-item">
              <span class="tag-badge tag-cons">Lợi nhuận độc quyền</span>
              <div class="list-item-title">Đẩy chi phí truyền hình và dịch vụ lên vai người hâm mộ</div>
              <div class="list-item-content">
                Vị thế độc quyền giúp FIFA liên tục nâng giá bản quyền truyền hình lên mức phi mã. Chi phí khổng lồ này cuối cùng bị các đài truyền hình đẩy sang vai người hâm mộ (người tiêu dùng cuối cùng) dưới dạng tiền cước thuê bao truyền hình cáp hoặc xem trực tuyến cực đắt đỏ.
              </div>
            </div>
            
            <div class="list-item cons-item">
              <span class="tag-badge tag-cons">Mục nát & Quan liêu</span>
              <div class="list-item-title">Nguy cơ tham nhũng nội bộ cực kỳ nghiêm trọng</div>
              <div class="list-item-content">
                Đúng như quy luật mục nát của chủ nghĩa tư bản độc quyền mà Lênin chỉ ra, việc thiếu cơ chế giám sát và tập trung quyền lực tuyệt đối đã sinh ra các hành vi quan liêu, tham nhũng. Điển hình là đại án tham nhũng FIFA Gate năm 2015, phơi bày việc nhận hối lộ hàng chục triệu đô để mua phiếu bầu quyền đăng cai World Cup.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 5. Kết luận -->
<section id="conclusion">
  <div class="container">
    <div class="conclusion-box reveal">
      <div class="hero-badge" style="margin-bottom: 1.5rem; background: rgba(255, 46, 84, 0.08);">Tổng kết nghiên cứu</div>
      <h2 class="conclusion-title gradient-text-dual">5. Kết luận biện chứng về FIFA</h2>
      <p class="conclusion-text">
        Mặc dù FIFA được đăng ký hoạt động như một tổ chức phi lợi nhuận và không thực hiện chia cổ tức cho các cổ đông, nhưng <strong>bản chất vận hành kinh tế và quản trị của tổ chức này hoàn toàn trùng khớp với một thực thể độc quyền tuyệt đối</strong> trong nền kinh tế tư bản hiện đại.
      </p>
      <p class="conclusion-text" style="margin-top:-1.5rem;">
        Trường hợp của FIFA minh chứng rõ nét cho xu hướng tất yếu của nền kinh tế hàng hóa: sự cạnh tranh tự do tất yếu dẫn đến quá trình tích tụ, tập trung nguồn lực và quyền lực kinh tế vào tay một đế chế khổng lồ. Đây là ví dụ thực tiễn sinh động để vận dụng các quy luật của Kinh tế chính trị Mác - Lênin vào kỷ nguyên hiện đại, cho thấy độc quyền không chỉ tồn tại trong các ngành công nghiệp nặng hay tài chính, mà còn bao trùm cả lĩnh vực giải trí, văn hóa và thể thao thế giới, tạo ra một đế chế kinh tế có sức mạnh ngang ngửa với các quốc gia độc lập.
      </p>
      
      <!-- Sơ đồ tư duy tóm tắt quy luật -->
      <h3 style="font-size: 1.3rem; color: var(--accent-gold); margin-bottom: 2rem;">Sơ đồ tư duy biện chứng:</h3>
      <div class="concept-flow">
        <div class="flow-node text-muted">Cạnh tranh tự do</div>
        <div class="flow-arrow">➔</div>
        <div class="flow-node text-muted">Tích tụ & Tập trung sản xuất</div>
        <div class="flow-arrow">➔</div>
        <div class="flow-node gold-glow">Độc quyền FIFA (Thống lĩnh)</div>
        <div class="flow-arrow">➔</div>
        <div class="flow-node red-glow">Mâu thuẫn nội tại (Biện chứng)</div>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer>
  <div class="container">
    <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
      © 2026 Bài nghiên cứu Kinh tế chính trị Mác - Lênin. Thiết kế trang web tương tác bởi Antigravity.
    </p>
  </div>
</footer>
`

// --- LOGIC TƯƠNG TÁC JS ---

// 1. Logic cho phần Thống kê Doanh thu (Section 3: Revenue Dashboard)
const revenueData = {
  tv: {
    title: "Bản quyền truyền hình",
    percentage: "49%",
    desc: "Bản quyền truyền hình là nguồn thu lớn nhất của FIFA. Các đài truyền hình trên khắp thế giới buộc phải tham gia vào các cuộc đấu thầu cạnh tranh gay gắt, chi trả những khoản tiền khổng lồ để giành quyền phát sóng trực tiếp giải vô địch bóng đá thế giới World Cup. Đây là minh chứng rõ nét cho khả năng áp đặt giá cả độc quyền nhờ nắm giữ mặt hàng độc nhất vô nhị.",
    img: "./images/fifa_revenue.png"
  },
  marketing: {
    title: "Tài trợ và Tiếp thị",
    percentage: "29%",
    desc: "Các tập đoàn đa quốc gia hàng đầu (như Coca-Cola, Adidas, Visa...) sẵn sàng chi trả các khoản phí quảng cáo cực kỳ đắt đỏ để trở thành 'đối tác độc quyền' của FIFA. Điều này mang lại cho họ lợi thế cạnh tranh áp đảo so với các đối thủ trên thị trường toàn cầu thông qua việc độc quyền sử dụng thương hiệu World Cup.",
    img: "./images/fifa_empire.png"
  },
  licensing: {
    title: "Cấp phép thương hiệu (Licensing)",
    percentage: "15%",
    desc: "FIFA thu về nguồn lợi nhuận lớn từ việc bán bản quyền tên gọi, logo giải đấu, và hình ảnh bản quyền cầu thủ cho các công ty sản xuất trò chơi điện tử (ví dụ điển hình là dòng game bóng đá EA Sports nổi tiếng trước đây) và các nhà sản xuất quà tặng lưu niệm, quần áo trên toàn cầu.",
    img: "./images/capital_accumulation.png"
  },
  tickets: {
    title: "Vé và Dịch vụ lưu trú",
    percentage: "7%",
    desc: "FIFA giữ quyền kiểm soát hoàn toàn việc định giá, phân phối vé cho mọi trận đấu thuộc hệ thống World Cup. Do không có kênh phân phối trung gian độc lập và không có sản phẩm thay thế tương tự, người hâm mộ bắt buộc phải chấp nhận mọi mức giá vé do FIFA áp đặt để có thể xem trực tiếp.",
    img: "./images/fifa_conflict.png"
  }
};

const revItems = document.querySelectorAll('.rev-item');
const detailTitle = document.getElementById('detail-title');
const detailDesc = document.getElementById('detail-desc');
const detailImg = document.getElementById('detail-img');

revItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all items
    revItems.forEach(i => i.classList.remove('active'));
    
    // Add active to current
    item.classList.add('active');
    
    // Get stream key
    const streamKey = item.getAttribute('data-stream');
    const data = revenueData[streamKey];
    
    // Fade out detail content briefly for transition
    const detailCard = document.querySelector('.rev-details-card');
    detailCard.style.opacity = '0.3';
    detailCard.style.transform = 'translateY(10px)';
    detailCard.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
      // Update text & image
      detailTitle.innerText = data.title;
      detailDesc.innerText = data.desc;
      detailImg.src = data.img;
      
      // Fade back in
      detailCard.style.opacity = '1';
      detailCard.style.transform = 'translateY(0)';
    }, 300);
  });
});

// 2. Logic Tabs phần Đánh giá (Section 4: Evaluation Tabs)
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from buttons
    tabButtons.forEach(b => b.classList.remove('active'));
    // Add active to clicked
    btn.classList.add('active');
    
    // Toggle active tab content
    const tabId = btn.getAttribute('data-tab');
    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === `tab-${tabId}`) {
        content.classList.add('active');
      }
    });
  });
});

// 3. Accordion / Interactive Expandable List Items (Section 4: List Items)
const listItems = document.querySelectorAll('.list-item');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    
    // If we want to collapse other items in the same container
    parent.querySelectorAll('.list-item').forEach(sibling => {
      if (sibling !== item) {
        sibling.classList.remove('expanded');
      }
    });
    
    // Toggle current item
    item.classList.toggle('expanded');
  });
});

// 4. Scroll Active Navigation Link & Scroll Reveal Animation
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  
  // Reveal elements on scroll
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;
    
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });

  // Active navigation update
  let currentSec = 'hero';
  sections.forEach(sec => {
    const secTop = sec.offsetTop;
    const secHeight = sec.clientHeight;
    // We update active link when the section is at least 30% visible in view
    if (window.scrollY >= secTop - windowHeight * 0.3) {
      currentSec = sec.id;
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-sec') === currentSec) {
      item.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  // Trigger initially to show elements above the fold
  revealOnScroll();
});
// Call immediately in case load event already fired
revealOnScroll();