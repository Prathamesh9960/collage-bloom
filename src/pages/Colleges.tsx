import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GraduationCap, MapPin, Trophy, TrendingUp } from "lucide-react";

const allColleges = [
  // Pune Colleges
  {
    name: "College of Engineering Pune (COEP)",
    district: "Pune",
    ranking: 1,
    cutoff: { CSE: 99.6, IT: 97.8, Mechanical: 95.2, AIML: 99.6 },
    placements: { average: "8 LPA", highest: "50 LPA" },
    img: "https://th.bing.com/th/id/R.7879a90ee339b5015e87864cb224b160?rik=BXeRgtFMBEn3Wg&riu=http%3a%2f%2fi2.wp.com%2fwww.campustimespune.com%2fwp-content%2fuploads%2f2015%2f06%2fcoep-pune-campus-pics.jpg%3fresize%3d588%252C391&ehk=fUYi1eSOi0MUZzSFdEkk7QYnXOaHzZt4INSMfV2K0Ks%3d&risl=&pid=ImgRaw&r=0",
    site: "https://www.coep.org.in/",
    established: "1854",
    type: "Government"
  },
  {
    name: "Pune Institute of Computer Technology (PICT)",
    district: "Pune",
    ranking: 2,
    cutoff: { CSE: 99.6, IT: 96.9, ENTC: 95.8, AIDS: 99.5 },
    placements: { average: "7 LPA", highest: "44 LPA" },
    img: "https://tse3.mm.bing.net/th/id/OIP.-YFT1U3JOhQbZRQw1ZiRowHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://pict.edu/",
    established: "1983",
    type: "Private"
  },
  {
    name: "Vishwakarma Institute of Technology (VIT Pune)",
    district: "Pune",
    ranking: 3,
    cutoff: { CSE: 96.7, IT: 95.9, Mechanical: 93.5, AIDS: 98.0 },
    placements: { average: "6.5 LPA", highest: "41 LPA" },
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20241220170538941535/Vishwakarma-Institute-of-Technology.webp",
    site: "https://www.vit.edu/",
    established: "1983",
    type: "Private"
  },
  {
    name: "MIT World Peace University (MIT-WPU)",
    district: "Pune",
    ranking: 4,
    cutoff: { CSE: 95.2, IT: 94.5, Mechanical: 92.1, AIDS: 95.6 },
    placements: { average: "5.8 LPA", highest: "35 LPA" },
    img: "https://tse4.mm.bing.net/th/id/OIP.gRRt6ZKyEgoh0rHWnsyLkQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://mitwpu.edu.in/",
    established: "1983",
    type: "Private"
  },
  {
    name: "Bharati Vidyapeeth College of Engineering (BVCOE Pune)",
    district: "Pune",
    ranking: 5,
    cutoff: { CSE: 94.8, IT: 93.6, ENTC: 91.5, AIML: 93.9 },
    placements: { average: "5 LPA", highest: "30 LPA" },
    img: "https://th.bing.com/th/id/R.0917073d56d2a5d8901eee2a89c7128d?rik=0OPVLMdH%2bHeY5w&riu=http%3a%2f%2fcoewpune.bharatividyapeeth.edu%2fmedia%2fimages%2fcoewpune_homepage.jpg&ehk=M1NCsorlKC6JLPGgDnwOPeaZSd%2bKYWlzCFWyC8cqyaA%3d&risl=&pid=ImgRaw&r=0",
    site: "https://bvcoe.bharatividyapeeth.edu/",
    established: "1983",
    type: "Private"
  },
  {
    name: "Sinhgad College of Engineering (SCOE Pune)",
    district: "Pune",
    ranking: 6,
    cutoff: { CSE: 93.2, IT: 92.5, Mechanical: 90.8 },
    placements: { average: "4.8 LPA", highest: "28 LPA" },
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/3075/2018/7/16/Sinhgad-College-of-Engineering-Pune-Campus6.jpg",
    site: "http://scoe.sinhgad.edu/",
    established: "1996",
    type: "Private"
  },
  {
    name: "Army Institute of Technology (AIT Pune)",
    district: "Pune",
    ranking: 7,
    cutoff: { CSE: 95.0, IT: 94.2, ENTC: 92.0 },
    placements: { average: "6.5 LPA", highest: "39 LPA" },
    img: "https://www.targetadmission.com/img/colleges/newc/3327-59143.jpg",
    site: "https://www.aitpune.com/",
    established: "1994",
    type: "Private"
  },
  {
    name: "DY Patil College of Engineering (Akurdi)",
    district: "Pune",
    ranking: 8,
    cutoff: { CSE: 92.8, IT: 91.5, ENTC: 90.0 },
    placements: { average: "5.2 LPA", highest: "29 LPA" },
    img: "https://th.bing.com/th/id/OIP.y3CjnT8AWJKnpy7UFUUi1wHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://engg.dypvp.edu.in/",
    established: "1984",
    type: "Private"
  },
  {
    name: "AISSMS College of Engineering",
    district: "Pune",
    ranking: 9,
    cutoff: { CSE: 92.1, IT: 91.2, Mechanical: 89.9 },
    placements: { average: "4.9 LPA", highest: "26 LPA" },
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/5030/2018/5/18/AISSMS-College-of-Engineering-Pune1.jpg",
    site: "https://aissmscoe.com/",
    established: "1992",
    type: "Private"
  },
  {
    name: "MIT College of Engineering (MITCOE)",
    district: "Pune",
    ranking: 10,
    cutoff: { CSE: 93.9, IT: 92.7, Mechanical: 90.4 },
    placements: { average: "5.3 LPA", highest: "31 LPA" },
    img: "https://img.jagranjosh.com/images/2022/March/1132022/8.jpg",
    site: "http://www.mitcoe.ac.in/",
    established: "1983",
    type: "Private"
  },
  {
    name: "Pimpri Chinchwad College of Engineering (PCCOE)",
    district: "Pune",
    ranking: 11,
    cutoff: { CSE: 94.0, IT: 93.0, Mechanical: 91.2 },
    placements: { average: "5.5 LPA", highest: "25 LPA" },
    img: "https://tse3.mm.bing.net/th/id/OIP.3N2nPRdPlc71w_H8eGlr5gHaEZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://pccoepune.com/",
    established: "1999",
    type: "Private"
  },
  {
    name: "Cummins College of Engineering for Women, Pune",
    district: "Pune",
    ranking: 12,
    cutoff: { CSE: 91.5, IT: 90.0, ENTC: 88.3 },
    placements: { average: "5.5 LPA", highest: "22 LPA" },
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/3740/2018/8/20/MKSSSs-Cummins-College-of-Engineering-for-Women-Pune-campus4.jpg",
    site: "https://www.cumminscollege.org/",
    established: "1990",
    type: "Private"
  },
  {
    name: "Symbiosis Institute of Technology (SIT)",
    district: "Pune",
    ranking: 13,
    cutoff: { CSE: 90.7, IT: 89.8, Mechanical: 88.0 },
    placements: { average: "6.0 LPA", highest: "30 LPA" },
    img: "https://tse4.mm.bing.net/th/id/OIP.VxhyL_raH3KK8k_YBjUjRgHaDM?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://www.sitpune.edu.in/",
    established: "2008",
    type: "Private"
  },
  {
    name: "MIT Academy of Engineering (MITAOE, Alandi)",
    district: "Pune",
    ranking: 14,
    cutoff: { CSE: 92.6, IT: 91.7, ENTC: 90.2 },
    placements: { average: "4.8 LPA", highest: "18 LPA" },
    img: "https://www.mycampusreview.com/images/postgallery/1694672805mitacedamybanner.jpg",
    site: "https://www.mitaoe.ac.in/",
    established: "2000",
    type: "Private"
  },

  // Mumbai Colleges
  {
    name: "K. J. Somaiya Institute of Engineering & Information Technology (KJSIET)",
    district: "Mumbai",
    ranking: 1,
    cutoff: { CSE: 88.0, IT: 87.0, Mechanical: 83.5, ENTC: 84.0 },
    placements: { average: "2.6 LPA", highest: "4.8 LPA" },
    img: "https://www.highereducationdigest.com/wp-content/uploads/2020/04/Img-4-13-550x330.jpg",
    site: "https://kjsit.somaiya.edu.in/en",
    established: "2001",
    type: "Private"
  },
  {
    name: "Thadomal Shahani Engineering College (TSEC)",
    district: "Mumbai",
    ranking: 2,
    cutoff: { CSE: 86.5, IT: 85.2, Mechanical: 81.0, ENTC: 81.5 },
    placements: { average: "2.0 LPA", highest: "3.5 LPA" },
    img: "https://tse1.mm.bing.net/th/id/OIP.bXBIxRx_uNwSCcq6NSNl_gHaFR?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://tsec.edu/",
    established: "1983",
    type: "Private"
  },
  {
    name: "Vivekanand Education Society's Institute of Technology (VESIT)",
    district: "Mumbai",
    ranking: 3,
    cutoff: { CSE: 86.8, IT: 85.5, Mechanical: 81.5, ENTC: 82.0 },
    placements: { average: "2.1 LPA", highest: "3.7 LPA" },
    img: "https://th.bing.com/th/id/OIP.syrrDIrHMrjCpfNkJAw0TwHaDt?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://vesit.ves.ac.in/",
    established: "1984",
    type: "Private"
  },
  {
    name: "Sardar Vallabhbhai Patel Institute of Technology (SVIT Mumbai)",
    district: "Mumbai",
    ranking: 4,
    cutoff: { CSE: 87.5, IT: 86.3, Mechanical: 82.5, ENTC: 83.0 },
    placements: { average: "2.4 LPA", highest: "4.3 LPA" },
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/3249/2018/11/1/Campus%20view%20of%20Sardar%20Vallabhbhai%20Patel%20Institute%20of%20Technology%20Anand_Campus-view.png",
    site: "https://svit.edu.in/",
    established: "1994",
    type: "Private"
  },
  {
    name: "Universal College of Engineering (UCoE)",
    district: "Mumbai",
    ranking: 5,
    cutoff: { CSE: 87.0, IT: 85.8, Mechanical: 81.8, ENTC: 82.5 },
    placements: { average: "2.2 LPA", highest: "3.8 LPA" },
    img: "https://th.bing.com/th/id/OIP.dCuZA1x6i91rb-vyUjkXbQHaEc?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://universalcollege.edu.in/",
    established: "1994",
    type: "Private"
  },

  // Nagpur Colleges
  {
    name: "Visvesvaraya National Institute of Technology (VNIT), Nagpur",
    district: "Nagpur",
    ranking: 1,
    cutoff: { CSE: 95.0, ECE: 92.0, Mechanical: 90.0, Civil: 89.5 },
    placements: { average: "11.9 LPA", highest: "32 LPA" },
    img: "https://images.careerindia.com/college-photos/8381/vnit-campus-1_1462173673.jpg",
    site: "https://vnit.ac.in/",
    established: "1960",
    type: "Government"
  },
  {
    name: "IIIT Nagpur",
    district: "Nagpur",
    ranking: 2,
    cutoff: { CSE: 93.0, ECE: 90.5, IT: 89.0 },
    placements: { average: "11.0 LPA", highest: "47 LPA" },
    img: "https://iirfranking.com/news/wp-content/uploads/2022/10/IIIT-Nagpur.webp",
    site: "https://iiitnagpur.edu.in/",
    established: "2015",
    type: "Government"
  },
  {
    name: "Yashwantrao Chavan College of Engineering (YCCE), Wanadongri",
    district: "Nagpur",
    ranking: 3,
    cutoff: { CSE: 90.0, ECE: 88.0, Mechanical: 85.0 },
    placements: { average: "7.5 LPA", highest: "18 LPA" },
    img: "https://media.getmyuni.com/azure/college-image/big/yeshwantrao-chavan-college-of-engineering-ycce-nagpur.jpg",
    site: "https://ycce.edu/",
    established: "1984",
    type: "Government"
  },
  {
    name: "G. H. Raisoni College of Engineering (GHRCE), Nagpur",
    district: "Nagpur",
    ranking: 4,
    cutoff: { CSE: 89.0, ECE: 86.5, Mechanical: 83.0 },
    placements: { average: "5.5 LPA", highest: "16 LPA" },
    img: "https://gyaanarth.com/wp-content/uploads/2022/05/gh-raisoni-college-of-engineering-ghrce-nagpur-1.jpg",
    site: "https://ghrce.raisoni.net/",
    established: "1996",
    type: "Private"
  },

  // Kolhapur Colleges
  {
    name: "KIT's College of Engineering, Kolhapur",
    district: "Kolhapur",
    ranking: 1,
    cutoff: { CSE: 92.0, ECE: 90.5, Mechanical: 88.0, Electrical: 89.0 },
    placements: { average: "7.0 LPA", highest: "22 LPA" },
    img: "https://www.gkseries.com/blog/wp-content/uploads/2020/04/KITs-College-of-Engineering-Kolhapur.jpg",
    site: "https://kitcoek.in/",
    established: "1983",
    type: "Private"
  },
  {
    name: "Tatyasaheb Kore Institute of Engineering & Technology (TKIET), Warananagar",
    district: "Kolhapur",
    ranking: 2,
    cutoff: { CSE: 90.0, ECE: 88.0, Mechanical: 85.0, Civil: 84.5 },
    placements: { average: "6.5 LPA", highest: "20 LPA" },
    img: "https://img.jagranjosh.com/images/2024/March/2732024/Tatyasaheb-Kore-Institute-of-Engineering-and-Technology-Kolhapur-Campus-View-2.png",
    site: "http://tkietwarana.ac.in/",
    established: "1983",
    type: "Private"
  },

  // Solapur Colleges
  {
    name: "Walchand Institute of Technology",
    district: "Solapur",
    ranking: 1,
    cutoff: { CSE: 85.0, IT: 83.5, Mechanical: 80.0, ENTC: 81.5 },
    placements: { average: "4.5 LPA", highest: "16 LPA" },
    img: "https://tse2.mm.bing.net/th/id/OIP.lkRw7PblVcx7SgRrzNls1wHaDl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://witsolapur.org/",
    established: "1983",
    type: "Private"
  },
  {
    name: "A. G. Patil Institute of Technology",
    district: "Solapur",
    ranking: 2,
    cutoff: { CSE: 78.0, IT: 76.5, Mechanical: 74.0, ENTC: 75.0 },
    placements: { average: "3.2 LPA", highest: "8 LPA" },
    img: "https://tse1.mm.bing.net/th/id/OIP.QLI1EdR0XciRJvfBPp_m5wHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://www.agpit.edu.in/",
    established: "1983",
    type: "Private"
  },

  // Aurangabad Colleges
  {
    name: "Maharashtra Institute of Technology, Aurangabad",
    district: "Chhatrapati Sambhaji Nagar",
    ranking: 1,
    cutoff: { CSE: 92.0, ECE: 90.0, Mechanical: 87.0, Civil: 85.0, AIDS: 89.0 },
    placements: { average: "6.5 LPA", highest: "22 LPA" },
    img: "https://tse1.mm.bing.net/th/id/OIP.icPcx_PtKmlRgVsY1uAmjAHaE8?pid=Api&P=0&h=180",
    site: "https://mit.asia/",
    established: "1983",
    type: "Private"
  },
  {
    name: "Government College of Engineering, Aurangabad",
    district: "Chhatrapati Sambhaji Nagar",
    ranking: 2,
    cutoff: { CSE: 90.0, ECE: 88.0, Mechanical: 85.0, Electrical: 83.5, AIDS: 87.5 },
    placements: { average: "6.0 LPA", highest: "20 LPA" },
    img: "https://media.getmyuni.com/azure/college-images-test/government-college-of-engineering-gce-aurangabad/747edb58105341dcb1b67516827e67c0.jpeg",
    site: "https://geca.ac.in/",
    established: "1960",
    type: "Government"
  }
];

const Colleges = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-6 text-center content-fade-up">
          <h1 className="text-4xl font-bold mb-4 text-primary">All Colleges</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover comprehensive information about top engineering colleges with detailed rankings, cutoffs, and placement records.
          </p>
        </div>
      </section>

      {/* Colleges List */}
      <section className="container mx-auto px-6 py-12">
        <div className="space-y-8">
          {allColleges.map((college, index) => (
            <Card 
              key={college.name}
              className="group hover:shadow-xl transition-all duration-500 border-l-4 border-l-primary overflow-hidden card-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden">
                  <img 
                    src={college.img} 
                    alt={college.name}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-white font-bold text-lg px-3 py-1">
                      #{college.ranking}
                    </Badge>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300 mb-2">
                      {college.name}
                    </CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {college.district}
                      </span>
                      <span className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        Est. {college.established}
                      </span>
                      <Badge variant="outline">{college.type}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-primary">Placement Statistics</h4>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4 text-accent" />
                            Average: {college.placements.average}
                          </span>
                          <span className="text-highlight font-semibold">
                            Highest: {college.placements.highest}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-primary">Cutoff Percentiles</h4>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(college.cutoff).map(([branch, cutoff]) => (
                            <Badge key={branch} variant="outline" className="text-xs">
                              {branch}: {cutoff}%
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        variant="college" 
                        size="lg"
                        className="group"
                        asChild
                      >
                        <a href={college.site} target="_blank" rel="noopener noreferrer">
                          Visit Official Website
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Colleges;