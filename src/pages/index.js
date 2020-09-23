import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I am a passionate learner by heart. I specialize in machine learning and computer vision. 
          
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Data Scientist</h3>
              <div className="subheading mb-3">Nutrien</div>
              <ul>
                <li>Won the management approval for 90% of the proposed projects based on prototype results and business impact</li>
                <li>Reduced the AI models train-deployment process time by 80% through the implementation of continuous integration for optimizing the machine learning models using Docker Containers, AWS Sage Maker and S3 buckets that saved AWS billing of $56,000 annually</li>
                <li>Designed and built Power BI dashboards to enable quick real-time trend and data analysis for various business stakeholders</li>
                <li>Generated daily Excel VBA reports to provide perspective on performance reports for different business teams</li>
                <li>Successfully automated the SAP HANA admin manual activities using Microsoft Power Automate and saved the operational time by 95%</li>
                <li><b>Increased Profits by Recommending Data Driven Optimal Routes</b></li>
                    <ul>
                      <li>Performed extensive R&D and created a Profit Optimizer AI model from scratch leveraging different regression algorithms. Model successfully recommended the optimal shipment routes based on lowest transportation cost and highest profit with an error value less than 5%.</li>
                      <li>Developed models assist the sales managers in decision-making while arranging the shipment of a product from various distribution centers</li>
                    </ul>
                <li><b>Pond Temperature Forecaster</b></li>
                    <ul>
                      <li>Successfully developed an efficient data collection engine that captured the manual actions taken by engineers at a solution mine site. This data was combined with weather and other sensor data and were very crucial in building robust LSTM models to forecast the temperature of solution mine.</li>
                      <li>The developed models performed with an error of less than 2 degrees and enabled site engineers for greater pond temperature control that in turn helped in maximizing potash production</li>
                    </ul>
                <li><b>Deep Neural Network Based Hazard Incident Trend Forecaster</b></li>
                    <ul>
                      <li>Successfully designed and deployed an end-to-end AI model based on “Deep Neural Networks” that forecasts the hazardous incidents at various operation mine sites with less than 10% error.</li>
                      <li>Conducted various crucial experiments with different methods such as K-Means and hierarchical clustering algorithms to prepare relevant dataset through topic modelling on the raw unstructured dataset</li>
                    </ul>
              </ul>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Machine Learning Researcher</h3>
              <div className="subheading mb-3">University of Saskatchewan</div>
              <ul>
                <li>Prediction of Early Vigor from Images of Carinata Plants</li>
                    <ul>
                      <li>Applied image processing techniques like image stitching, color calibration, GPS based 3D model generation to develop the analytical dataset</li>
                      <li>Developed computer vision pipeline including Randomized Hough Transform and Graph Cuts algorithm to quantify plant growth.</li>
                      <li>Built machine learning modules using Neural Network, Random Forest to predict early plant vigor from aerial image dataset with an accuracy of 89%</li>
                    </ul>
                <li>Rapid Characterization of Various Pulse Seeds</li>
                    <ul>
                      <li>Developed an image processing application in Python using graph cuts and canny edge detection algorithms to enable rapid characterization of 10000 pulse seeds.</li>
                      <li>This application replaced previous manual data processing resulting in 80% reduction in manual analysis hours</li>
                      {/* <li></li> */}
                    </ul>
                <li>Predictive Reproductive Nodes in Lentils</li>
                    <ul>
                      <li>Developed an ensemble of machine learning regression models of Support Vector Machine, Gradient Boosting Regressor, Neural Networks to predict reproductive nodes in lentils with an accuracy of 92%.</li>
                      <li>Performed extensive correlation tests and engineered features to build the training dataset</li>
                      {/* <li></li> */}
                    </ul>
                <li>Automatic Detection of Plant Height</li>
                    <ul>
                      <li>Efficiently designed a plant height detection method in MATLAB and improved the accuracy by 10% in comparison to the state of art methods</li>
                      {/* <li></li>
                      <li></li> */}
                    </ul>
                <li>UAV Based Assessment of Canopy Height and Canopy Cover</li>
                    <ul>
                      <li>Designed an ensemble of Support Vector Machines and Random Forest based models to estimate canopy height and canopy cover of diverse lentil germplasm using UAV imagery and achieved an error rate of less than 3.15cm and 0.73m2</li>
                      {/* <li></li>
                      <li></li> */}
                    </ul>

              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2016 - January 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Machine Learning Engineer (Part Time)</h3>
              <div className="subheading mb-3">Third Eye Labs, Saskatoon, Canada</div>
              <p>
              Designed and developed machine learning and image processing algorithms to automate object-based multimedia content delivery in augmented and virtual reality
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2018 - January 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Science Instructor</h3>
              <div className="subheading mb-3">College of Arts and Science, University of Saskatchewan, Saskatoon</div>
              <p>
              Offered hands-on-learning activities to improve Indigenous student experiences of science
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2017 - June 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Software Developer (Intern)</h3>
              <div className="subheading mb-3">IIT-B (Indian Institute of Technology-Bombay), Mumbai, India</div>
              <p>
              Crucial in developing an algorithm for optimization of power under non-uniform illumination conditions for a mobile solar photo voltaic system
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May - June 2014</span>
            </div>
          </div>
        </div>
{/* 
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Database Developer (Intern)</h3>
              <div className="subheading mb-3">Coromandel Electronics and Agencies, Visakhapatnam, India</div>
              <p>
              Maintained and enhanced the existing SQL code base running on the server machine without effecting the server process (little to no downtime on server)
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Summer 2015 and Summer 2016</span>
            </div>
          </div> */}



      </section>


      

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Saskatchewan</h3>
              <div className="subheading mb-3">Master of Science</div>
              <div>Computer Science - Machine Learning and Computer Vision Track</div>
              <ul>
              <li>Score: 84%</li>
              <li>Thesis: “Prediction of Early Vigor from Overhead Images of Carinata Plants”</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2006 - May 2010</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">GITAM Univeristy</h3>
              <div className="subheading mb-3">Information Technology</div>
              <ul>
              <li>GPA: 8.33/10</li>
              <li>Project: “An Evaluation Approach for Parameter Estimation of Software Reliability Growth Models” using the ABC, PSO and GA optimization algorithms"</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2011 - April 2015</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>

          <ul>
           <li>
            Machine Learning and Data Science: Scikit-Learn, TensorFlow, PyTorch, Keras, NumPy, SciPy, Pandas
            </li>
            <li>Natural Language Processing: NLTK, CoreNLP </li>
            <li>Image Processing: OpenCV, Scikit-Image, TensorFlow</li>
            <li>Programming Languages: Python, R, MATLAB, SQL, C, Excel VBA, C++, Java</li>
            <li>Software: Visual Studio, PyCharm, NetBeans, Eclipse, GitHub, Jupyter Notebook, JupyterLab </li>
            <li>Other tools: AWS Cloud Services, Microsoft Flow, Microsoft Power Automate, Microsoft Power BI, Microsoft PowerApps, OSIsoft PI Vision, Agisoft PhotoScan</li>
            </ul>

            {/* <li className="list-inline-item">
              <i class="fab fa-python"></i>
            </li>

            <li className="list-inline-item">
            <i class="fab fa-aws"></i>
            </li> 

            <li className="list-inline-item">
            <i class="fab fa-java"></i>
            </li> */}


          

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            {/* <li>
              <i className="fa-li fa fa-check"></i>
              M
            </li> */}
            {/* <li>
              <i className="fa-li fa fa-check"></i>
              ML Ops platform
            </li> */}
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a full stack data scientist, I enjoy most of my time reading books and painting.

          </p>
          <p className="mb-0">I spend a large amount of my free time exploring the latest technology and
            advancements in the AI world. I am currently learning about the generative adversarial networks (GANs).
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Conferences &amp; Posters</h2>
          <ul className="fa-ul mb-0">
            <li>
            Achieved a position in the top 6 finalists (of 44 participants) for the poster, “Measuring quantitative traits of Pulse Seeds Digitally” at 2nd Computer Science Research Fest 2017, Canada
            </li>
            <li>Presented poster, “Rapid Image Based characterization of Pulse Seeds” at 2nd Annual P2IRC Symposium in 2017, Canada
            </li>
            
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
