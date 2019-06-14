import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TAXCODE', {schema: 'dbo' } )
@Index('IX_TAXCODE_PKINDEX', ['TAX_TAXCODE_C'], {unique: true})
export class T_TAXCODE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'TAX_TAXCODE_C',
        })
    public TAX_TAXCODE_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'TAX_TAXPERCENTAGE_D',
        })
    public TAX_TAXPERCENTAGE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'TAX_DESCRIPNED_C',
        })
    public TAX_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'TAX_DESCRIPFRA_C',
        })
    public TAX_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'TAX_USERID_C',
        })
    public TAX_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'tax_flagdelete_C',
        })
    public tax_flagdelete_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TAX_FLAGNOTUSEDINVREP_C',
        })
    public TAX_FLAGNOTUSEDINVREP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TAX_FLAGSELECTABLE_C',
        })
    public TAX_FLAGSELECTABLE_C: string | null;

}
