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
                entity.HasKey(e => e.Id)
                    .HasName("PRIMARY");

                entity.ToTable("products");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

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

                entity.Property(e => e.prices)
                    .HasColumnName("prices")
                    .HasColumnType("decimal(13,4)");

                entity.Property(e => e.quantity)
                    .HasColumnName("quantity")
                    .HasColumnType("int(11)");

                // entity.Property(e => e.img)
                //     .HasColumnName("img")
                //     .HasColumnType("varchar(250)");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}