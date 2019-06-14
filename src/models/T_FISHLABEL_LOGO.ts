import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FISHLABEL_LOGO', {schema: 'dbo' } )
export class T_FISHLABEL_LOGO {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'FLL_CODE_C',
        })
    public FLL_CODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FLL_FILENAMENED_C',
        })
    public FLL_FILENAMENED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FLL_FILENAMEFRA_C',
        })
    public FLL_FILENAMEFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FLL_FILENAMEFRANED_C',
        })
    public FLL_FILENAMEFRANED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FLL_FILENAMENEDFRA_C',
        })
    public FLL_FILENAMENEDFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FLL_USEABLE_C',
        })
    public FLL_USEABLE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'FLL_DESCRIPNED_C',
        })
    public FLL_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'FLL_DESCRIPFRA_C',
        })
    public FLL_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FLL_TYPE_C',
        })
    public FLL_TYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'FLL_EXTENTION_C',
        })
    public FLL_EXTENTION_C: string | null;

}
