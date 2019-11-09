using Microsoft.EntityFrameworkCore;

namespace ecommerce.Models
{
    public partial class ProductsContext : DbContext
    {
        public ProductsContext (DbContextOptions<ProductsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Products> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("Server=localhost;Port=3306;Database=ecomdb;User=root;Password=12345678;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Products>(entity =>
            {
                entity.ToTable("products");

                entity.Property(e => e.id)
                    .HasColumnName("id")
                    .HasColumnType("int()");

                entity.Property(e => e.typeOfproduct)
                    .IsRequired()
                    .HasColumnName("typeOfproduct")
                    .HasColumnType("varchar(50)");

                entity.Property(e => e.product_description)
                    .IsRequired()
                    .HasColumnName("product_description")
                    .HasColumnType("mediumtext");

                entity.Property(e => e.product_name)
                    .IsRequired()
                    .HasColumnName("product_name")
                    .HasColumnType("varchar(100)");
                
                 entity.Property(e => e.img)
                    .HasColumnName("img")
                    .HasColumnType("varchar(250)");

                entity.Property(e => e.prices)
                    .HasColumnName("prices")
                    .HasColumnType("decimal(13,4)");

                entity.Property(e => e.quantity)
                    .HasColumnName("quantity")
                    .HasColumnType("int()");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}