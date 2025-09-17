import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GraduationCap, TrendingUp, Users } from "lucide-react";
import logo from "@/assets/logo.png";

interface College {
  name: string;
  district: string;
  ranking: number;
  cutoff: Record<string, number>;
  placements: { average: string; highest: string };
  img: string;
  site: string;
}

const colleges: College[] = [
  // Pune Colleges
  {
    name: "College of Engineering Pune (COEP)",
    district: "Pune",
    ranking: 1,
    cutoff: { CSE: 99.6, IT: 97.8, Mechanical: 95.2, AIML: 99.6 },
    placements: { average: "8 LPA", highest: "50 LPA" },
    img: "https://th.bing.com/th/id/R.7879a90ee339b5015e87864cb224b160?rik=BXeRgtFMBEn3Wg&riu=http%3a%2f%2fi2.wp.com%2fwww.campustimespune.com%2fwp-content%2fuploads%2f2015%2f06%2fcoep-pune-campus-pics.jpg%3fresize%3d588%252C391&ehk=fUYi1eSOi0MUZzSFdEkk7QYnXOaHzZt4INSMfV2K0Ks%3d&risl=&pid=ImgRaw&r=0",
    site: "https://www.coep.org.in/"
  },
  {
    name: "Pune Institute of Computer Technology (PICT)",
    district: "Pune",
    ranking: 2,
    cutoff: { CSE: 99.6, IT: 96.9, ENTC: 95.8, AIDS: 99.5 },
    placements: { average: "7 LPA", highest: "44 LPA" },
    img: "https://tse3.mm.bing.net/th/id/OIP.-YFT1U3JOhQbZRQw1ZiRowHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://pict.edu/"
  },
  {
    name: "Vishwakarma Institute of Technology (VIT Pune)",
    district: "Pune",
    ranking: 3,
    cutoff: { CSE: 96.7, IT: 95.9, Mechanical: 93.5, AIDS: 98.0 },
    placements: { average: "6.5 LPA", highest: "41 LPA" },
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20241220170538941535/Vishwakarma-Institute-of-Technology.webp",
    site: "https://www.vit.edu/"
  },
  {
    name: "MIT World Peace University (MIT-WPU)",
    district: "Pune",
    ranking: 4,
    cutoff: { CSE: 95.2, IT: 94.5, Mechanical: 92.1, AIDS: 95.6 },
    placements: { average: "5.8 LPA", highest: "35 LPA" },
    img: "https://tse4.mm.bing.net/th/id/OIP.gRRt6ZKyEgoh0rHWnsyLkQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://mitwpu.edu.in/"
  },
  {
    name: "Bharati Vidyapeeth College of Engineering (BVCOE Pune)",
    district: "Pune",
    ranking: 5,
    cutoff: { CSE: 94.8, IT: 93.6, ENTC: 91.5, AIML: 93.9 },
    placements: { average: "5 LPA", highest: "30 LPA" },
    img: "https://th.bing.com/th/id/R.0917073d56d2a5d8901eee2a89c7128d?rik=0OPVLMdH%2bHeY5w&riu=http%3a%2f%2fcoewpune.bharatividyapeeth.edu%2fmedia%2fimages%2fcoewpune_homepage.jpg&ehk=M1NCsorlKC6JLPGgDnwOPeaZSd%2bKYWlzCFWyC8cqyaA%3d&risl=&pid=ImgRaw&r=0",
    site: "https://bvcoe.bharatividyapeeth.edu/"
  },
  {
    name: "Sinhgad College of Engineering (SCOE Pune)",
    district: "Pune",
    ranking: 6,
    cutoff: { CSE: 93.2, IT: 92.5, Mechanical: 90.8 },
    placements: { average: "4.8 LPA", highest: "28 LPA" },
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/3075/2018/7/16/Sinhgad-College-of-Engineering-Pune-Campus6.jpg",
    site: "http://scoe.sinhgad.edu/"
  },
  {
    name: "Army Institute of Technology (AIT Pune)",
    district: "Pune",
    ranking: 7,
    cutoff: { CSE: 95.0, IT: 94.2, ENTC: 92.0 },
    placements: { average: "6.5 LPA", highest: "39 LPA" },
    img: "https://www.targetadmission.com/img/colleges/newc/3327-59143.jpg",
    site: "https://www.aitpune.com/"
  },
  {
    name: "DY Patil College of Engineering (Akurdi)",
    district: "Pune",
    ranking: 8,
    cutoff: { CSE: 92.8, IT: 91.5, ENTC: 90.0 },
    placements: { average: "5.2 LPA", highest: "29 LPA" },
    img: "https://th.bing.com/th/id/OIP.y3CjnT8AWJKnpy7UFUUi1wHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://engg.dypvp.edu.in/"
  },
  {
    name: "AISSMS College of Engineering",
    district: "Pune",
    ranking: 9,
    cutoff: { CSE: 92.1, IT: 91.2, Mechanical: 89.9 },
    placements: { average: "4.9 LPA", highest: "26 LPA" },
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/5030/2018/5/18/AISSMS-College-of-Engineering-Pune1.jpg",
    site: "https://aissmscoe.com/"
  },
  {
    name: "MIT College of Engineering (MITCOE)",
    district: "Pune",
    ranking: 10,
    cutoff: { CSE: 93.9, IT: 92.7, Mechanical: 90.4 },
    placements: { average: "5.3 LPA", highest: "31 LPA" },
    img: "https://img.jagranjosh.com/images/2022/March/1132022/8.jpg",
    site: "http://www.mitcoe.ac.in/"
  },
  {
    name: "Pimpri Chinchwad College of Engineering (PCCOE)",
    district: "Pune",
    ranking: 11,
    cutoff: { CSE: 94.0, IT: 93.0, Mechanical: 91.2 },
    placements: { average: "5.5 LPA", highest: "25 LPA" },
    img: "https://tse3.mm.bing.net/th/id/OIP.3N2nPRdPlc71w_H8eGlr5gHaEZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://pccoepune.com/"
  },
  {
    name: "Cummins College of Engineering for Women, Pune",
    district: "Pune",
    ranking: 12,
    cutoff: { CSE: 91.5, IT: 90.0, ENTC: 88.3 },
    placements: { average: "5.5 LPA", highest: "22 LPA" },
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/3740/2018/8/20/MKSSSs-Cummins-College-of-Engineering-for-Women-Pune-campus4.jpg",
    site: "https://www.cumminscollege.org/"
  },
  {
    name: "Symbiosis Institute of Technology (SIT)",
    district: "Pune",
    ranking: 13,
    cutoff: { CSE: 90.7, IT: 89.8, Mechanical: 88.0 },
    placements: { average: "6.0 LPA", highest: "30 LPA" },
    img: "https://tse4.mm.bing.net/th/id/OIP.VxhyL_raH3KK8k_YBjUjRgHaDM?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://www.sitpune.edu.in/"
  },
  {
    name: "MIT Academy of Engineering (MITAOE, Alandi)",
    district: "Pune",
    ranking: 14,
    cutoff: { CSE: 92.6, IT: 91.7, ENTC: 90.2 },
    placements: { average: "4.8 LPA", highest: "18 LPA" },
    img: "https://www.mycampusreview.com/images/postgallery/1694672805mitacedamybanner.jpg",
    site: "https://www.mitaoe.ac.in/"
  },

  // Mumbai Colleges
  {
    name: "K. J. Somaiya Institute of Engineering & Information Technology (KJSIET)",
    district: "Mumbai",
    ranking: 1,
    cutoff: { CSE: 88.0, IT: 87.0, Mechanical: 83.5, ENTC: 84.0 },
    placements: { average: "2.6 LPA", highest: "4.8 LPA" },
    img: "https://www.highereducationdigest.com/wp-content/uploads/2020/04/Img-4-13-550x330.jpg",
    site: "https://kjsit.somaiya.edu.in/en"
  },
  {
    name: "Thadomal Shahani Engineering College (TSEC)",
    district: "Mumbai",
    ranking: 2,
    cutoff: { CSE: 86.5, IT: 85.2, Mechanical: 81.0, ENTC: 81.5 },
    placements: { average: "2.0 LPA", highest: "3.5 LPA" },
    img: "https://tse1.mm.bing.net/th/id/OIP.bXBIxRx_uNwSCcq6NSNl_gHaFR?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://tsec.edu/"
  },
  {
    name: "Vivekanand Education Society's Institute of Technology (VESIT)",
    district: "Mumbai",
    ranking: 3,
    cutoff: { CSE: 86.8, IT: 85.5, Mechanical: 81.5, ENTC: 82.0 },
    placements: { average: "2.1 LPA", highest: "3.7 LPA" },
    img: "https://th.bing.com/th/id/OIP.syrrDIrHMrjCpfNkJAw0TwHaDt?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://vesit.ves.ac.in/"
  },
  {
    name: "Sardar Vallabhbhai Patel Institute of Technology (SVIT Mumbai)",
    district: "Mumbai",
    ranking: 4,
    cutoff: { CSE: 87.5, IT: 86.3, Mechanical: 82.5, ENTC: 83.0 },
    placements: { average: "2.4 LPA", highest: "4.3 LPA" },
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/3249/2018/11/1/Campus%20view%20of%20Sardar%20Vallabhbhai%20Patel%20Institute%20of%20Technology%20Anand_Campus-view.png",
    site: "https://svit.edu.in/"
  },
  {
    name: "Universal College of Engineering (UCoE)",
    district: "Mumbai",
    ranking: 5,
    cutoff: { CSE: 87.0, IT: 85.8, Mechanical: 81.8, ENTC: 82.5 },
    placements: { average: "2.2 LPA", highest: "3.8 LPA" },
    img: "https://th.bing.com/th/id/OIP.dCuZA1x6i91rb-vyUjkXbQHaEc?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://universalcollege.edu.in/"
  },

  // Nagpur Colleges
  {
    name: "Visvesvaraya National Institute of Technology (VNIT), Nagpur",
    district: "Nagpur",
    ranking: 1,
    cutoff: { CSE: 95.0, ECE: 92.0, Mechanical: 90.0, Civil: 89.5 },
    placements: { average: "11.9 LPA", highest: "32 LPA" },
    img: "https://images.careerindia.com/college-photos/8381/vnit-campus-1_1462173673.jpg",
    site: "https://vnit.ac.in/"
  },
  {
    name: "IIIT Nagpur",
    district: "Nagpur",
    ranking: 2,
    cutoff: { CSE: 93.0, ECE: 90.5, IT: 89.0 },
    placements: { average: "11.0 LPA", highest: "47 LPA" },
    img: "https://iirfranking.com/news/wp-content/uploads/2022/10/IIIT-Nagpur.webp",
    site: "https://iiitnagpur.edu.in/"
  },
  {
    name: "Yashwantrao Chavan College of Engineering (YCCE), Wanadongri",
    district: "Nagpur",
    ranking: 3,
    cutoff: { CSE: 90.0, ECE: 88.0, Mechanical: 85.0 },
    placements: { average: "7.5 LPA", highest: "18 LPA" },
    img: "https://media.getmyuni.com/azure/college-image/big/yeshwantrao-chavan-college-of-engineering-ycce-nagpur.jpg",
    site: "https://ycce.edu/"
  },
  {
    name: "G. H. Raisoni College of Engineering (GHRCE), Nagpur",
    district: "Nagpur",
    ranking: 4,
    cutoff: { CSE: 89.0, ECE: 86.5, Mechanical: 83.0 },
    placements: { average: "5.5 LPA", highest: "16 LPA" },
    img: "https://gyaanarth.com/wp-content/uploads/2022/05/gh-raisoni-college-of-engineering-ghrce-nagpur-1.jpg",
    site: "https://ghrce.raisoni.net/"
  },

  // Kolhapur Colleges
  {
    name: "KIT's College of Engineering, Kolhapur",
    district: "Kolhapur",
    ranking: 1,
    cutoff: { CSE: 92.0, ECE: 90.5, Mechanical: 88.0, Electrical: 89.0 },
    placements: { average: "7.0 LPA", highest: "22 LPA" },
    img: "https://www.gkseries.com/blog/wp-content/uploads/2020/04/KITs-College-of-Engineering-Kolhapur.jpg",
    site: "https://kitcoek.in/"
  },
  {
    name: "Tatyasaheb Kore Institute of Engineering & Technology (TKIET), Warananagar",
    district: "Kolhapur",
    ranking: 2,
    cutoff: { CSE: 90.0, ECE: 88.0, Mechanical: 85.0, Civil: 84.5 },
    placements: { average: "6.5 LPA", highest: "20 LPA" },
    img: "https://img.jagranjosh.com/images/2024/March/2732024/Tatyasaheb-Kore-Institute-of-Engineering-and-Technology-Kolhapur-Campus-View-2.png",
    site: "http://tkietwarana.ac.in/"
  },

  // Solapur Colleges
  {
    name: "Walchand Institute of Technology",
    district: "Solapur",
    ranking: 1,
    cutoff: { CSE: 85.0, IT: 83.5, Mechanical: 80.0, ENTC: 81.5 },
    placements: { average: "4.5 LPA", highest: "16 LPA" },
    img: "https://tse2.mm.bing.net/th/id/OIP.lkRw7PblVcx7SgRrzNls1wHaDl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://witsolapur.org/"
  },
  {
    name: "A. G. Patil Institute of Technology",
    district: "Solapur",
    ranking: 2,
    cutoff: { CSE: 78.0, IT: 76.5, Mechanical: 74.0, ENTC: 75.0 },
    placements: { average: "3.2 LPA", highest: "8 LPA" },
    img: "https://tse1.mm.bing.net/th/id/OIP.QLI1EdR0XciRJvfBPp_m5wHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://www.agpit.edu.in/"
  },

  // Aurangabad Colleges
  {
    name: "Maharashtra Institute of Technology, Aurangabad",
    district: "Chhatrapati Sambhaji Nagar",
    ranking: 1,
    cutoff: { CSE: 92.0, ECE: 90.0, Mechanical: 87.0, Civil: 85.0, AIDS: 89.0 },
    placements: { average: "6.5 LPA", highest: "22 LPA" },
    img: "https://tse1.mm.bing.net/th/id/OIP.icPcx_PtKmlRgVsY1uAmjAHaE8?pid=Api&P=0&h=180",
    site: "https://mit.asia/"
  },
  {
    name: "Government College of Engineering, Aurangabad",
    district: "Chhatrapati Sambhaji Nagar",
    ranking: 2,
    cutoff: { CSE: 90.0, ECE: 88.0, Mechanical: 85.0, Electrical: 83.5, AIDS: 87.5 },
    placements: { average: "6.0 LPA", highest: "20 LPA" },
    img: "https://media.getmyuni.com/azure/college-images-test/government-college-of-engineering-gce-aurangabad/747edb58105341dcb1b67516827e67c0.jpeg",
    site: "https://geca.ac.in/"
  }
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [visibleColleges, setVisibleColleges] = useState(6);

  const districts = useMemo(() => {
    return Array.from(new Set(colleges.map(college => college.district)));
  }, []);

  const filteredColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDistrict = !selectedDistrict || college.district === selectedDistrict;
      return matchesSearch && matchesDistrict;
    });
  }, [searchTerm, selectedDistrict]);

  useEffect(() => {
    setVisibleColleges(6);
  }, [searchTerm, selectedDistrict]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative hero-gradient h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl px-6 content-fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src={logo} alt="College Finder" className="w-16 h-16 animate-bounce-gentle" />
            <h1 className="text-5xl font-bold text-shadow-lg">Find Your Dream College</h1>
          </div>
          <p className="text-xl mb-8 text-white/90">
            Search by name and filter by district to find the best colleges for your future.
          </p>
          <Button variant="hero" size="lg" className="animate-pulse-glow">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Input
              type="text"
              placeholder="Search college name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm transition-all duration-300 focus:shadow-lg"
            />
            <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
              <SelectTrigger className="max-w-xs transition-all duration-300 focus:shadow-lg">
                <SelectValue placeholder="All Districts" />
              </SelectTrigger>
              <SelectContent>
                {districts.map(district => (
                  <SelectItem key={district} value={district}>{district}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Colleges Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredColleges.slice(0, visibleColleges).map((college, index) => (
            <Card 
              key={college.name}
              className="group hover:shadow-xl transition-all duration-500 border-l-4 border-l-accent card-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={college.img} 
                  alt={college.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-primary font-semibold">
                    Rank #{college.ranking}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {college.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  {college.district}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    Avg: {college.placements.average}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-highlight" />
                    High: {college.placements.highest}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {Object.entries(college.cutoff).slice(0, 3).map(([branch, cutoff]) => (
                    <Badge key={branch} variant="outline" className="text-xs">
                      {branch}: {cutoff}%
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="college" 
                  className="w-full group"
                  asChild
                >
                  <a href={college.site} target="_blank" rel="noopener noreferrer">
                    View Details
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {visibleColleges < filteredColleges.length && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setVisibleColleges(prev => prev + 6)}
              className="hover:scale-105 transition-transform duration-300"
            >
              Show More Colleges
            </Button>
          </div>
        )}

        {filteredColleges.length === 0 && (
          <div className="text-center py-16">
            <GraduationCap className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No colleges found</h3>
            <p className="text-muted-foreground">Try adjusting your search filters</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;